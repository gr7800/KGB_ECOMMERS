import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { jwtDecode } from "jwt-decode";
import axios from "axios";


export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ values }, { rejectWithValue }) => {
    try {
      let requestObj = {
        "firstname": values.firstName,
        "lastname": values.lastName,
        "gender": values.gender,
        "email": values.email,
        "password": values.password,
        "role": "user"
      }
      let response = await axios.post("https://ecommerce-api-8ga2.onrender.com/api/user/register", requestObj)
      return response.data
    }
    catch (error) {
      console.log(error, 'errro')
      rejectWithValue(error.response.data)
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (values) => {
    try {
      let requestObj = {
        "email": values.email,
        "password": values.password,
        "role": "user"
      }

      let response = await axios.post("https://ecommerce-api-8ga2.onrender.com/api/user/login", requestObj, { withCredentials: true })
      return response.data|| {}
    }
    catch (error) {
      console.log(error, 'errro')
      rejectWithValue(error.response.data)
    }
  }
);


export const userData = createAsyncThunk(
  "auth/userData",
  async (token) => {
    try {

      const decodedToken = jwtDecode(token);
      const docRef = doc(db, "users", decodedToken.user_id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
      } else {
        return {}
      }

    }
    catch (error) {
      console.log(error, 'error in Firestore data')
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async () => {
  return ""
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    token: false,
    user: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.token = false;
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        console.error("Error during sign-up:", action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        let user = action.payload?.user || {}
        state.token = true;
        state.user = user
        state.isLoading = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        console.error("Error during sign-in:", action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {};
        state.token = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(userData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(userData.rejected, (state, action) => {

        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
