"use client";
import { BannerApi } from "@/app/Redux/features/BannerSlice/BannerSlice";
import {
  AppBar,
  Box,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { DataGrid } from "@mui/x-data-grid";
import Image from "next/image";

function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { bannerData, loading } = useSelector((state) => state.banner);

  useEffect(() => {
    dispatch(BannerApi());
  }, [dispatch]);

  //<<<----logout ---->>
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  //<<-----data maped from bannerData----->>>>>
  const rows = bannerData?.map((banner) => ({
    id: banner.id,
    title: banner.title,
    image: banner.image,
    isActive: banner.is_active,
    createdAt: banner.created_at,
  }));
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 250 },
    {
      field: "image",
      headerName: "Image",
      width: 200,
      renderCell: (params) => (
        <Image width={100} height={50} src={params.value} alt="banner.png" />
      ),
    },
    { field: "isActive", headerName: "Active", width: 100 },
    { field: "createdAt", headerName: "Created At", width: 200 },
    // ...add other columns
  ];

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: "#EF233C" }} position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              HOME
            </Typography>

            <LogoutIcon
              onClick={handleLogout}
              sx={{ marginLeft: "auto", cursor: "pointer" }}
            />
          </Toolbar>
        </AppBar>

        {/* <------loading Progess-------> */}

        <div className="md:pt-6 m-auto overflow-x-auto p-3 lg:w-[90%]">
          {loading ? (
            <LinearProgress style={{ color: "#EF233C" }} />
          ) : (
            <DataGrid
              rows={rows}
              columns={columns}
              autoHeight
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          )}
        </div>
      </Box>
    </div>
  );
}

export default Home;
