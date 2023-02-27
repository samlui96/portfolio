import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineLinkedin, AiOutlineGithub , AiOutlineFilePdf } from 'react-icons/ai';
import AnimatedLetters from './AnimateLetters'

const Intro = ({heading, message, buttonMessage, buttonPath}) => {
  const [letterClass, setLetterClass] = useState('textAnimate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 10)
  }, [])

  return (
    <div className='flex items-center justify-center h-screen w-screen bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-mono px-5'>
          <AnimatedLetters 
            strArray={heading.split(' ')}
            idx={heading.length}
            type={letterClass}
          />
        </h2>
        <p className='py-5 text-xl font-mono px-5'>
          <AnimatedLetters 
            strArray={message.split(' ')}
            idx={message.length}
            type={letterClass}
          />
        </p>
        <Link href={ buttonPath ? buttonPath : '#'}>
          <div className='px-5'>
            <button 
              className='px-8 py-2 border font-mono hover:bg-gray-600' 
              style={{display: buttonPath ? 'block' : 'none'}}
            > 
              { buttonMessage ? buttonMessage : ''}
            </button>
          </div>
        </Link>
        <div className='absolute text-white z-[2] bottom-5 right-5'>
          <Link href='https://www.linkedin.com/in/paksumlui/' className='hover:text-gray-500'>
            <AiOutlineLinkedin size={30} style={{ color: 'white' }} />
          </Link>
          <Link href='https://github.com/samlui96' className='hover:text-gray-500'>
            <AiOutlineGithub size={30} style={{ color: 'white' }} />
          </Link>
          <a href='Resume.pdf' download='Resume.pdf'> 
            <AiOutlineFilePdf size={30} style={{ color: 'white' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
