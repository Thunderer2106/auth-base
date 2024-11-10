import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { login } from "../api";

const Login = ({ setToken }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await login(values);
      setToken(response.data.token);
      message.success("Login successful");
    } catch (error) {
      message.error("Invalid login");
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Log In
      </Button>
    </Form>
  );
};

export default Login;
