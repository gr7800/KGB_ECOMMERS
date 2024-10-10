import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";
import {  doSignOut } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

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
    localStorage.setItem("token", token||"");
    return token || ""
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
    token:localStorage.getItem("token")|| "",
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
        console.error("Error during log out:", action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
