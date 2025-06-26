import React from 'react';
import { Outlet } from 'react-router-dom';
import NadVar from '../Components/NadVar/NadVar';

export default function MainLayout() {
  return (
    <>
      <NadVar />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </>
  );
}