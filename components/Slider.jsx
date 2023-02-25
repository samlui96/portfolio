import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ path, title, itemsArray}) => {
  const [current, setCurrent] = useState(0);
  const length = itemsArray.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(itemsArray) || itemsArray.length <= 0) {
    return null;
  }

  return (
    <div id={path} className='w-screen bg-neutral-500'>
      <h1 className='text-2xl font-bold text-center text-white p-4'>{title}</h1>
      <div className='relative flex cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl'>
      {itemsArray.map((item, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-1000'
                : 'opacity-0'
            }
          >
            <FaArrowCircleLeft
              onClick={prevSlide}
              className='absolute top-[40%] left-[20px] text-white/70 cursor-pointer select-none z-[2]'
              size={50}
            />
            {index === current && (
              <div className="inline-block gap-2 pb-10">
                <div className="w-screen items-center justify-center px-20">
                  <div className="bg-white p-4 flex flex-col justify-between leading-normal rounded-lg transition-shadow shadow-xl shadow-black/30">
                    <div className="mb-8">
                      <p className="text-sm text-gray-600 w-screen items-center pt-4">
                        {item.year}
                      </p>
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        {item.title}
                      </div>
                      <div className="text-gray-700 text-base px-4">
                        <ul style={{listStyle: 'circle'}}>
                          {(item.text).map((data, i) => {
                            return (
                            <li key={data+'.'+i}> {data}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="items-center">
                      <div className="text-sm">
                        <p className="text-gray-900 leading-none">
                          {item.company}
                        </p>
                        <p className="text-gray-600">
                          {item.address}
                        </p>
                        <div className='text-right font-serif'>{current+1}/{itemsArray.length}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <FaArrowCircleRight
              onClick={nextSlide}
              className='absolute top-[40%] right-[20px] text-white/70 cursor-pointer select-none z-[2]'
              size={50}
            />
        </div>
        );
      })}
      </div>
    </div>
  );
};

export default Slider;
