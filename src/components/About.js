import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-500 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <div className='mt-8 md:mt-16'> {/* Adjust margin-top for smaller screens */}
          <p className='text-xl'>
            "I'm a BCSCS student and a web developer. My interest lies in web 3.0 and metaverse AI, where I'm passionate about exploring new technologies and virtual experiences. My exploration aims to open new doors in the digital world and advance understanding through AI. My skills encompass front-end and back-end development, along with AI integration and crafting immersive user experiences. I'm keen on finding innovative solutions to new challenges and transforming the digital landscape. My goal is to materialize creative and impactful projects in the evolving metaverse."
          </p>
        </div>
        <div className='mt-8 md:mt-16'> {/* Adjust margin-top for smaller screens */}
          <p className='text-xl'>
            "With a foundation in computer science and a fervor for innovation, I thrive on the cutting edge of technology. My journey in web development and exploration of the metaverse is fueled by a curiosity to push boundaries and redefine digital experiences. I'm driven by a vision to not only adapt to the evolving digital ecosystem but also to shape it with forward-thinking solutions. Beyond coding, I'm deeply intrigued by the intersection of AI and virtual worlds, where I see endless possibilities for collaboration, creativity, and societal impact. Through continuous learning and experimentation, I aspire to be a catalyst for positive change in the ever-expanding realm of web 3.0 and beyond."
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
