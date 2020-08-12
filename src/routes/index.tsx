import React from 'react';

import {useAuth} from '../contexts/auth';

import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';

const Routes: React.FC = () => {
  const {signed } = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;