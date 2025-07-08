import React from 'react';
import { Outlet } from 'react-router-dom';
import NadVar from '../Components/NadVar/NadVar';
import Footer from '../Components/Footer/Footer';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <>
      <NadVar />
      <main className='outlet'>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}