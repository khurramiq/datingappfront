/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import LikeList from '../pages/likeList';
import ContactUs from '../pages/contact_us';
import AboutUs from '../pages/about_us';
import Inbox from '../pages/inbox';
import NotFound from '../pages/not_found/NotFound';
import './style.css';

export default ({ onlineUsers, arrivalMessage, socket }) => {
  return (
    <div className="private-routes-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/like-list" element={<LikeList />} />
        <Route
          path="/inbox"
          element={
            <Inbox
              onlineUsers={onlineUsers}
              arrivalMessage={arrivalMessage}
              socket={socket}
            />
          }
        />

        <Route path="/contact_us" element={<ContactUs socket={socket} />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
