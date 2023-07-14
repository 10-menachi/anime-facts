import React from 'react';
import { AiFillAudio } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const NavBar = () => (
  <div className="navbar">
    <div className="left">
      <MdOutlineKeyboardArrowLeft className="icon arrow-left" />
      2015
    </div>

    <h2 className="most-views">
      Most Views
    </h2>
    <div className="right-icons">
      <AiFillAudio className="icon audio" />
      <FiSettings className="icon settings" />
    </div>
  </div>
);

export default NavBar;
