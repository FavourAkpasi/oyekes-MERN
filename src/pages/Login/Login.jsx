import { Facebook, Google } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React from "react";
import "./Login.css";
import Footer from "../../components/Footer/Footer";
import Socials from "../../components/Socials/Socials";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="auth">
        <div className="logo" onClick={() => navigate("/")}>
          OYEKES
        </div>
        <div className="auth-container">
          <div className="auth-container-box">
            <div className="auth-option login">
              <span onClick={() => navigate("/login")}>LOGIN</span>
            </div>
            <div className="vertical-line"></div>
            <div className="auth-option">
              <span onClick={() => navigate("/signup")}>JOIN</span>
            </div>
          </div>
          <form action="">
            <TextField required id="outlined-required" label="Email" />
            <br />
            <TextField required id="outlined-required" label="Password" />
            <br />
            <Button
              sx={{
                padding: "0.8rem",
                fontWeight: "bold",
                color: "#111",
                backgroundColor: "pink",
                letterSpacing: "0.1rem",
              }}
              color="inherit"
              size="large"
            >
              LOGIN
            </Button>
            <br />
            <span className="forgot-password">forgot password?</span>
            <br />
            <span className="other-option"> OR LOGIN WITH </span>
            <br />
            <Button
              variant="outlined"
              startIcon={<Google color="error" />}
              color="inherit"
              size="large"
            >
              GOOGLE
            </Button>
            <br />
            <Button
              variant="outlined"
              startIcon={<Facebook color="primary" />}
              color="inherit"
              size="large"
            >
              FACEBOOK
            </Button>
          </form>
        </div>
      </div>
      <Socials />
      <Footer />
    </div>
  );
};

export default Login;
