import React, { useEffect } from "react";
import { Form, Input, Button, message, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile, deleteAccount } from "../api";

const Profile = ({ token }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile(token);
        form.setFieldsValue(response.data);
      } catch (error) {
        message.error("Error fetching profile");
      }
    };
    fetchProfile();
  }, [token, form]);

  const onUpdate = async (values) => {
    try {
      await updateProfile(values, token);
      message.success("Profile updated");
    } catch (error) {
      message.error("Update failed");
    }
  };

  const onDelete = async () => {
    try {
      await deleteAccount(token);
      message.success("Account deleted");
      navigate("/signup");
    } catch (error) {
      message.error("Error deleting account");
    }
  };

  return (
    <Card title="Profile" style={{ maxWidth: 400, margin: "auto" }}>
      <Form form={form} onFinish={onUpdate} layout="vertical">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="password" label="New Password">
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
        <Button danger onClick={onDelete} style={{ marginLeft: "10px" }}>
          Delete Account
        </Button>
      </Form>
    </Card>
  );
};

export default Profile;
