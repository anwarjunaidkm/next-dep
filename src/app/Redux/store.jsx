import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/AuthSlice/AuthSlice";
import banner from "./features/BannerSlice/BannerSlice";

export default configureStore({
  reducer: {
    auth: auth,
    banner: banner,
  },
});
