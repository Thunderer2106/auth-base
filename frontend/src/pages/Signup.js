import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { signup } from "../api";

const Signup = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await signup(values);
      message.success("Registration successful");
    } catch (error) {
      message.error("Error during registration");
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="username" label="Username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
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
        Sign Up
      </Button>
    </Form>
  );
};

export default Signup;
