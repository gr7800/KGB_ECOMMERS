import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { auth } from "../../firebaseConfig";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";

// export const signUp = createAsyncThunk(
//   "auth/signUp",
//   async ({ email, password }) => {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     return userCredential.user;
//   }
// );

// export const signIn = createAsyncThunk(
//   "auth/signIn",
//   async ({ email, password }) => {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     return userCredential.user;
//   }
// );

// export const logOut = createAsyncThunk("auth/logOut", async () => {
//   await signOut(auth);
// });

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(signUp.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(signUp.fulfilled, (state, action) => {
  //       state.user = action.payload;
  //       state.isLoading = false;
  //     })
  //     .addCase(signUp.rejected, (state, action) => {
  //       console.error("Error during sign-up:", action.error.message);
  //       state.isLoading = false;
  //       state.error = action.error.message;
  //     })
  //     .addCase(signIn.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(signIn.fulfilled, (state, action) => {
  //       state.user = action.payload;
  //       state.isLoading = false;
  //     })
  //     .addCase(signIn.rejected, (state, action) => {
  //       console.error("Error during sign-in:", action.error.message);
  //       state.isLoading = false;
  //       state.error = action.error.message;
  //     })
  //     .addCase(logOut.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(logOut.fulfilled, (state) => {
  //       state.user = null;
  //       state.isLoading = false;
  //     })
  //     .addCase(logOut.rejected, (state, action) => {
  //       console.error("Error during log out:", action.error.message);
  //       state.isLoading = false;
  //       state.error = action.error.message;
  //     });
  // },
});

export default authSlice.reducer;
// export { signUp, signIn, logOut };
