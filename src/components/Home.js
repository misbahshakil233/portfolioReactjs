import React, { useEffect, useRef } from 'react';
import { MdArrowRight } from 'react-icons/md';
import myimage from '../images/myimage.png';
import misbah from '../images/misbah.jpeg'
import Typed from 'typed.js';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web and Mobile Developer', 'AI learner'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div name="home" className="h-screen bg-gradient-to-b from-black to-gray-500">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col justify-center px-4 py-8 md:w-1/2">
          <h3 className="text-white text-2xl  font-semibold sm:text-3xl">Hi, I am</h3>
          <h1 className="text-white text-3xl font-bold sm:text-5xl">Misbah Shakil</h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a <span ref={el}></span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-xl">
            I have experience building and designing software. Currently, I love to work on web applications using technologies like React, Tailwind CSS, Next.js, Express, MongoDB. Now, I'm learning about the Metaverse, Web 3.0, and AI.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        {/* myImage */}
        <div className="hidden lg:flex justify-center items-center py-20 " >

        <img
          src={misbah}
          alt="my Profile"
          className="rounded-full  shadow-white w-2/3 md:w-full  duration-300 px-14  "
        />
      </div>
      </div>
    </div>
  );
};

export default Home;
