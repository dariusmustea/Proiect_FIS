import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import './LoginRegister.css';

const LoginRegister = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: values.email,
        password: values.password,
      });

      console.log('Login successful', response.data);
      alert('Login successful!');

      const userType = response.data.userType;

      // Redirect based on user type
      if (userType === 'admin') {
        alert('You are admin!');
        window.location.href = '/home';
      } else if (userType === 'customer') {
        alert('You are customer!');
        window.location.href = '/home';
      } else {
        alert('Unknown user type!');
      }
    } catch (error) {
      console.error('There was an error!', error);
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('Login failed!');
      }
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/login">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default LoginRegister;
