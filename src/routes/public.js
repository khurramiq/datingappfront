/* eslint-disable import/no-anonymous-default-export */
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Inbox from '../pages/inbox';
import ContactUs from '../pages/contact_us';
import AboutUs from '../pages/about_us';
const Login = lazy(() => import('../pages/loginPage'));
const NotFound = lazy(() => import('../pages/not_found/NotFound'));
const Register = lazy(() => import('../pages/registrationPage'));

export default ({ socket }) => {
  return (
    <div className="private-routes-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
