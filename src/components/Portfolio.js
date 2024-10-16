import React from 'react';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import pic4 from '../images/pic4.png';
import pic5 from '../images/pic5.png';
import pic6 from '../images/pic6.png';
import pic7 from '../images/pic7.png';
import pic8 from '../images/pic8.png';
import pic9 from '../images/pic9.png';

const Portfolio = () => {
  const portfolio = [
    { id: 1, src: pic8, href: "https://deserted-balance.surge.sh" },
     { id: 2, src: pic2, href: "https://ready-cheese.surge.sh" },
    { id: 3, src: pic3, href: "https://macabre-talk.surge.sh" },
     { id: 4, src: pic4, href: "https://example.com/project4" },
     { id: 5, src: pic7, href: "https://annoying-plantation.surge.sh" },
     { id: 6, src: pic6, href: "https://mellow-digestion.surge.sh" },
  ];

  const handleDemoClick = (href) => {
    window.open(href, '_blank');
  };

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='p-b-8'>
          <p className='text-4xl font-bold inline border-b-4 border-ray-500'>Portfolio</p>
          <p className='py-6'>Explore a glimpse of my latest creations now...</p>
        </div>
        
        {/* Rendering portfolio items */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map(({ id, src, href }) => (
            <div key={id} className='shadow-md shadow-gray-300 rounded-lg'>
              <img src={src} alt={`Image ${id}`} className='rounded-md duration-300 hover:scale-125' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleDemoClick(href)}>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
