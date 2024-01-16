import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../domain/axiosInstance";

//<<<--------------------Login Api------------------------>>>
export const LoginApi = createAsyncThunk(
  "login/LoginApi",
  async ({ formData, router }) => {
    try {
      const res = await axiosInstance.post(
        "/api_bcc/api/auth/login/",
        formData
      );
      if (res.data.data.token) {
        localStorage.setItem("token", res.data.data.token.access);
        router.push("/home");
      }
    } catch (error) {
      console.error("Login failed:", error.response.data.message);

      alert(error.response.data.message, "..!!");
    }
  }
);

const initialState = {
  loading: false,
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginApi.pending, (state, action) => {
        state.loading = true;
        console.log("requseted");
      })
      .addCase(LoginApi.fulfilled, (state, action) => {
        state.loading = false;
        console.log("success");
      })
      .addCase(LoginApi.rejected, (state, action) => {
        state.loading = false;
        console.log("failed");
      });
  },
});

export const {} = LoginSlice.actions;
export default LoginSlice.reducer;
