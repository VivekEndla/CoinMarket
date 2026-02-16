import React from "react";
import { Button, Form, Input, message, Modal, Typography, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  useGoogleLoginMutation,
  useLoginUserMutation,
} from "../components/auth/services/authApi";

const { Title, Text } = Typography;

const Login = () => {

  let [loginUser] = useLoginUserMutation();
  let [googleLogin] = useGoogleLoginMutation();
  let [loading, setLoading] = React.useState(false);
  let navigate = useNavigate();

  const handleLogin = async (values) => {
    const { email, password } = values;
    setLoading(true);
    try {
      await loginUser({ email, password }).unwrap();
      message.success("User logged in successfully");
      navigate("/dashboard");
    } catch (error) {
      message.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      let res = await googleLogin().unwrap();
      let { user, isnewUser } = res;

      message.success(`Welcome back ${user.displayName}`);

      if (isnewUser) {
        Modal.info({
          title: "New user detected",
          content: "Please complete the registration process",
          onOk: () => {
            navigate("/register", {
              state: {
                Name: user.displayName || "",
                email: user.email || "",
                photoURL: user.photoURL || "",
              },
            });
          },
        });
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      message.error(error.message || "Google login failed");
    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#0f172a,#020617)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px"
      }}
    >

      <div className="container">

        {/* Branding */}
        <div className="text-center mb-5">

          <Title
            style={{
              background:"linear-gradient(90deg,#facc15,#38bdf8)",
              WebkitBackgroundClip:"text",
              color:"transparent"
            }}
          >
            Coin Market
          </Title>

          <Text style={{ color:"#94a3b8" }}>
            Login to continue your crypto journey
          </Text>

        </div>


        {/* MAIN CARD */}
        <div
          className="row rounded-4 overflow-hidden shadow-lg"
          style={{
            background:"rgba(255,255,255,0.04)",
            backdropFilter:"blur(16px)",
            border:"1px solid rgba(255,255,255,0.08)"
          }}
        >

          {/* LEFT IMAGE */}
          <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">

            <img
              src="/assets/cryptologin.jpg"
              alt="crypto login"
              style={{
                width:"85%",
                borderRadius:"20px"
              }}
            />

          </div>


          {/* RIGHT FORM */}
          <div className="col-lg-6 p-5">

            <Form
              layout="vertical"
              onFinish={handleLogin}
              initialValues={{ email:"", password:"" }}
            >

              <Form.Item
                label={<span style={{color:"#cbd5f5"}}>Email</span>}
                name="email"
                rules={[{ required:true, message:"Enter email" }]}
              >
                <Input
                  size="large"
                  placeholder="Enter email"
                  style={{ background:"#020617", color:"#fff" }}
                />
              </Form.Item>

              <Form.Item
                label={<span style={{color:"#cbd5f5"}}>Password</span>}
                name="password"
                rules={[
                  { required:true, message:"Enter password" },
                  { min:6, message:"Min 6 characters" }
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter password"
                  style={{ background:"#020617", color:"#fff" }}
                />
              </Form.Item>

              <Button
                htmlType="submit"
                loading={loading}
                block
                size="large"
                style={{
                  background:"linear-gradient(90deg,#facc15,#38bdf8)",
                  border:"none",
                  color:"#020617",
                  fontWeight:"bold",
                  borderRadius:"999px"
                }}
              >
                Login
              </Button>

            </Form>

            <Divider style={{ borderColor:"#334155" }}>OR</Divider>

            <Button
              onClick={handleGoogleLogin}
              block
              size="large"
              className="rounded-pill"
            >
              Sign in with Google
            </Button>

            <div className="mt-4 text-center">

              <Text style={{color:"#94a3b8"}}>
                Don’t have account?{" "}
                <Link to="/register">Register</Link>
              </Text>

              <br/>

              <Text style={{color:"#94a3b8"}}>
                Forgot password?{" "}
                <Link to="/forgotpassword">Reset</Link>
              </Text>

            </div>

          </div>

        </div>

        <div className="text-center mt-4">

          <Button type="link" onClick={()=>navigate("/")}>
            ← Back to Home
          </Button>

        </div>

      </div>

    </div>

  );
};

export default Login;
  