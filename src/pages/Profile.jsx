import React, { useState, useEffect } from "react";
import {
  useLogoutUserMutation,
  useUpdateProfileMutation,
} from "../components/auth/services/authApi";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../components/auth/services/authSlice";
import { toast } from "react-toastify";

const Profile = () => {

  let { user } = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  let [logoutUser] = useLogoutUserMutation();
  let [updateProfile] = useUpdateProfileMutation();

  let [form, setForm] = useState({ displayName: "", photoUrl: "" });
  let [localImage, setLocalImage] = useState(null);

  useEffect(() => {
    if (user) {
      setForm({
        displayName: user.displayName || "",
        photoUrl: user.photoURL || "",
      });
    }
  }, [user]);

  const handlechange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      let url = URL.createObjectURL(file);
      setLocalImage(url);
      setForm((prev) => ({ ...prev, photoUrl: url }));
    } else {
      setLocalImage(null);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const { data, error } = await updateProfile({
        displayName: form.displayName,
        photoUrl: form.photoUrl,
      });

      if (data) {
        dispatch(setUser({ ...user, ...data }));
        toast.success("Profile updated successfully");
      } else if (error) {
        toast.error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
  };

  const photo = localImage || form.photoUrl || "./src/assets/login.jpg";

  return (
    <div
      style={{
        background: "#f1f5f9",
        minHeight: "100vh",
        paddingTop: "60px",
      }}
    >
      <div className="container">

        {/* PROFILE HEADER */}
        <div
          className="p-5 rounded-4 shadow-sm text-center mb-4"
          style={{
            background: "linear-gradient(135deg,#2563eb,#1e40af)",
            color: "white",
          }}
        >
          <img
            src={photo}
            alt="profile"
            className="rounded-circle border border-4 border-white mb-3"
            style={{
              width: "140px",
              height: "140px",
              objectFit: "cover",
            }}
          />

          <h3 className="fw-bold mb-1">
            {user?.displayName || "User"}
          </h3>

          <p className="mb-0">{user?.email}</p>
        </div>

        {/* PROFILE FORM */}
        <div
          className="p-4 rounded-4 shadow-sm"
          style={{ background: "white" }}
        >

          {/* Upload Image */}
          <div className="mb-4">
            <label className="form-label fw-semibold text-primary">
              Upload New Image
            </label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Display Name */}
          <div className="mb-4">
            <label className="form-label fw-semibold text-primary">
              Display Name
            </label>
            <input
              type="text"
              name="displayName"
              className="form-control"
              value={form.displayName}
              onChange={handlechange}
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
            <label className="form-label fw-semibold text-primary">
              Image URL
            </label>
            <input
              type="text"
              name="photoUrl"
              className="form-control"
              value={form.photoUrl}
              onChange={handlechange}
            />
          </div>

          {/* BUTTONS */}
          <div className="d-flex justify-content-between mt-4">

            <button
              className="btn text-white fw-semibold"
              style={{ background: "#2563eb" }}
              onClick={handleUpdateProfile}
            >
              Save Changes
            </button>

            <button
              className="btn btn-outline-danger fw-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
