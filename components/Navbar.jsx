import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { AiOutlineUser, AiOutlineFolderOpen ,AiOutlineMail} from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
            SAM
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 font-bold transition hover:scale-125'>
            <Link href='/'>About</Link>
          </li>
          <li className='p-4 font-bold transition hover:scale-125'>
            <Link href='/experience'>Experience</Link>
          </li>
          <li className='p-4 font-bold transition hover:scale-125'>
            <Link href='/project'>Project</Link>
          </li>
          <li className='p-4 font-bold transition hover:scale-125'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        <div
            className={
              nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-screen h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-screen h-screen bg-black text-center ease-in duration-300'
            }
          >
            <div className='grid-cols-1'>
              <div className='p-4'></div>
              <Link onClick={handleNav} href='/' className='hover:text-gray-500'>
                <AiOutlineUser className='inline-block' size={50} />
                <p className='text-xl'>ABOUT</p>
              </Link>
              <div className='p-4'></div>
              <Link onClick={handleNav} href='/experience' className='hover:text-gray-500'>
                <MdWorkOutline className='inline-block' size={50} />
                <p className='text-xl'>EXPERIENCE</p>
              </Link>
              <div className='p-4'></div>
              <Link onClick={handleNav} href='/project' className='hover:text-gray-500'>
                <AiOutlineFolderOpen className='inline-block' size={50} />
                <p className='text-xl'>PROJECT</p>
              </Link>
              <div className='p-4'></div>
              <Link onClick={handleNav} href='/contact' className='hover:text-gray-500'>
                <AiOutlineMail className='inline-block' size={50} />
                <p className='text-xl'>CONTACT</p>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
