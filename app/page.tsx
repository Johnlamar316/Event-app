"use client";
import React from "react";
import { Form, Input, Button } from "antd";

export default function Home() {
  const onFinish = (values: any) => {
    console.log("Login form submitted:", values);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <h1>Sign Up</h1>

      <Form
        name="login-form"
        layout="vertical"
        onFinish={onFinish}
        style={{
          minWidth: 400,
          padding: 24,
          border: "1px solid #d9d9d9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "Please enter a valid email!",
            },
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
          style={{ width: "100%" }}>
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
          style={{ width: "100%" }}>
          <Input.Password style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item style={{ width: "100%" }}>
          <Button type="primary" htmlType="submit" block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
