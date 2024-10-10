import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";
import { doSignOut } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { jwtDecode } from "jwt-decode";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({userCredentials, values}) => {
    const user = userCredentials.user;
    await updateProfile(user, {
      displayName: values.username,
    });

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      username: values.username,
      email: values.email,
      name: values.name,
    });
    localStorage.setItem(
      "token",
      userCredentials?._tokenResponse.idToken || ""
    );
    return userCredentials?._tokenResponse.idToken || ""
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (token) => {
    localStorage.setItem("token", token || "");
    return token || ""
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
        return { id: docSnap.id, ...docSnap.data() } // Store the document data
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
  await doSignOut();
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    token: localStorage.getItem("token") || "",
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
        state.token = action.payload;
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
        state.token = action.payload;
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
        state.user = null;
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
