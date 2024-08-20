import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
export

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login poslan', { email, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <Form
        name="login"
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
              type: 'email',
            },
          ]}
        >
          <Input
            value={email}
            onChange={(e:any) => setEmail(e.target.value)}
          />
        </Form.Item>
        
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
          ]}
        >
          <Input.Password
            value={password}
            onChange={(e:any) => setPassword(e.target.value)}
          />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;