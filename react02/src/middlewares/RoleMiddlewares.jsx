import React from 'react'
import { Outlet } from 'react-router-dom';

export default function RoleMiddlewares() {
    const isPre =false;
    if (!isPre) {
        return <h1>Accres</h1>
    }
  return <Outlet/>
}