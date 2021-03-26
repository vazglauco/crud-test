import React, { ChangeEvent, useState } from 'react';

import { useAuth } from '../../contexts/useAuth';
import { IUser } from '../../types/interfaces/IUser';
import Button from '../../UI/components/Button';
import Card from '../../UI/components/Card';
import Input from '../../UI/components/Input';
import Label from '../../UI/components/Label';
import { Column, Row } from '../../UI/components/Grid';
import Container from './styles'

const initialState: IUser = {
  username: '',
  password: '',
  grant_type: 'password',
  scope: 'web'
};

const Login: React.FC = () => {
  const { handleLogin } = useAuth();
  const [model, setModel] = useState(initialState);

  const extractFormData = (data: IUser): FormData => {
    const form = new FormData();

    for (let item in data) {
      form.append(item, data[item])
    }
    return form;
  }

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(extractFormData(model))
  }

  const updateModel = (e: ChangeEvent<HTMLInputElement>) => {
    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <Row>
        <Column size={2}></Column>
        <Column size={2}>
          <Card>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
              <div>
                <Label htmlFor="username">Username:</Label>
                <Input
                  value={model.username}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  value={model.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <Button type="submit">Login</Button>
              </div>
            </form>
          </Card>
        </Column>
        <Column size={2}></Column>
      </Row>
    </Container>
  );
}
export default Login;
