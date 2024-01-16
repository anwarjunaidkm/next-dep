"use client";
import { LoginApi } from "@/app/Redux/features/AuthSlice/AuthSlice";
import { CircularProgress, Container, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //<<----dispatch  loginApi with form data---------->>>
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(LoginApi({ formData, router }));
  };

  return (
    <Container>
      <div className="h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center p-1 md:p-10 md:border border-solid gap-4 justify-center">
          <h1 className="text-3xl text-[#3A3D4B] font-bold my-7">Login</h1>
          {loading ? ( // Conditionally render loading spinner
            <CircularProgress style={{ color: "#EF233C" }} />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Username"
                  variant="outlined"
                  required
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <TextField
                  id="filled-password-input"
                  label="Password"
                  size="small"
                  type="password"
                  variant="outlined"
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <p className="cursor-pointer text-right text-[#3A3D4B] text-[10px] p-0 m-0">
                  Forgot Password ?
                </p>
              </div>
              <button
                type="submit"
                className="cursor-pointer mt-3 hover:bg-[#991324] py-2 px-1 text-white font-semibold border border-solid w-full bg-[#EF233C]"
              >
                Sign In
              </button>
            </form>
          )}

          <p className="text-[12px] text-[#3A3D4B]">
            Already have an account ?
            <span className="m-1 text-[#EF233C] font-semibold cursor-pointer ">
              Login
            </span>{" "}
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Login;
