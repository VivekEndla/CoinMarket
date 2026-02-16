import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Alert,
  Typography,
  Divider,
  message,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  useRegisterUserMutation,
  useUpdateProfileMutation,
} from "../components/auth/services/authApi";

const { Title, Text } = Typography;

const Register = () => {

  const [form] = Form.useForm();
  const [registerUser] = useRegisterUserMutation();
  const [updateProfile] = useUpdateProfileMutation();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (values) => {

    setLoading(true);
    setError(null);

    try {

      const res = await registerUser({
        email: values.email,
        password: values.password,
      });

      if (res.error) throw new Error(res.error.message);

      await updateProfile({ displayName: values.name });

      message.success("Account created successfully!");
      navigate("/login");

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

  };

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"radial-gradient(circle at top,#0f172a,#020617)",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding:"40px"
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
            Create your account and start trading smarter
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
              src="/assets/register.jpg"
              alt="crypto register"
              style={{
                width:"85%",
                borderRadius:"20px"
              }}
            />

          </div>

          {/* RIGHT FORM */}

          <div className="col-lg-6 p-5">

            {error && (
              <Alert
                message="Registration Error"
                description={error}
                type="error"
                className="mb-3"
              />
            )}

            <Form
              layout="vertical"
              form={form}
              onFinish={handleRegister}
            >

              <Form.Item
                label={<span style={{color:"#cbd5f5"}}>Full Name</span>}
                name="name"
                rules={[{ required:true, message:"Enter name" }]}
              >
                <Input
                  size="large"
                  placeholder="Enter full name"
                  style={{ background:"#020617", color:"#fff" }}
                />
              </Form.Item>

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
                  { min:6, message:"Minimum 6 characters" }
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Create password"
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
                Register Now
              </Button>

            </Form>

            <Divider style={{ borderColor:"#334155" }}/>

            <div className="text-center">

              <Text style={{color:"#94a3b8"}}>
                Already have account? <Link to="/login">Login</Link>
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

export default Register;
