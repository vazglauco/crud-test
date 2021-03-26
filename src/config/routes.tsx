import React from 'react';
import { Switch, Route } from 'react-router'
import { useHistory } from 'react-router-dom'

import Login from '../components/Login';
import { useAuth } from '../contexts/useAuth';
import Suppliers from '../pages/Suppliers';
import SupplierForm from '../pages/Suppliers/Form';

interface Props {
  isPrivate?: boolean;
  path: string;
  exact: boolean;
  component: React.FC;
}

function CustomRoute({ isPrivate, ...props }: Props) {
  const history = useHistory()
  const { signed } = useAuth()

  if (isPrivate && !signed) {
    history.push('/login')
  } else if (props.path === '/login' && signed) {
    history.push('/')
  }
  return <Route {...props} />
}

const Routes: React.FC = () => {
  return (
    <Switch>
      <CustomRoute isPrivate path="/form" exact component={SupplierForm} />
      <CustomRoute isPrivate path="/form/:id" exact component={SupplierForm} />
      <CustomRoute isPrivate path="/" exact component={Suppliers} />
      <CustomRoute path="/login" exact component={Login} />
    </Switch>
  );
}

export default Routes;