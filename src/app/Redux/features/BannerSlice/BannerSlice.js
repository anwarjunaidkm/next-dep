import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../domain/axiosInstance";

//<<<------------------------Banner Api Call---------------------->>>>>
export const BannerApi = createAsyncThunk("banner/BannerApi", async () => {
  try {
    const res = await axiosInstance.get("/api_bcc/api/admin_panel/banners");
    return res.data.data.results;
  } catch (error) {
    console.error("Error fetching banners:", error);
  }
});

const initialState = {
  loading: false,
  bannerData: [],
};

export const BannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(BannerApi.pending, (state, action) => {
        state.loading = true;
        console.log("requseted");
      })
      .addCase(BannerApi.fulfilled, (state, action) => {
        state.loading = false;
        state.bannerData = action.payload;

        console.log("success");
      })
      .addCase(BannerApi.rejected, (state, action) => {
        state.loading = false;
        console.log("failed");
      });
  },
});

export const {} = BannerSlice.actions;
export default BannerSlice.reducer;
