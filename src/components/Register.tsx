import React, { useState } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
export


const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUsertName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Sifre nisu iste');
      return;
    }
  
    console.log('Registriran', { email, password, userName, firstName, lastName, dateOfBirth });
  };

  return (
    <div>
      <h2>Register</h2>
      <Form
        name="register"
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

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password
            value={confirmPassword}
            onChange={(e:any) => setConfirmPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please enter your username!',
            },
          ]}
        >
          <Input
            value={userName}
            onChange={(e:any) => setUsertName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please enter your first name!',
            },
          ]}
        >
          <Input
            value={firstName}
            onChange={(e:any) => setFirstName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please enter your last name!',
            },
          ]}
        >
          <Input
            value={lastName}
            onChange={(e:any) => setLastName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dateOfBirth"
          rules={[
            {
              required: true,
              message: 'Please enter your date of birth!',
            },
          ]}
        >
          <DatePicker
            value={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
            format="YYYY-MM-DD"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;