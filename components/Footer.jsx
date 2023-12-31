import React from 'react';
import Link from 'next/link';
import { AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer-container'>
      <p>2023 Sarwat Headphones All Rights reserved</p>
    <p className='icons'>
      <AiFillInstagram/>
      <AiOutlineTwitter/>
    </p>
    </div>
  )
}

export default Footer