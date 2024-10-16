import React from 'react'
import certificate1 from '../images/certificate1.png'
const Expeirence = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-500 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
        </div>
        <div className='mt-8 md:mt-16'> {/* Adjust margin-top for smaller screens */}
          <p className='text-xl'>
            "I'm a BCSCS student and a web developer. My interest lies in web 3.0 and metaverse AI, where I'm passionate about exploring new technologies and virtual experiences. My exploration aims to open new doors in the digital world and advance understanding through AI. My skills encompass front-end and back-end development, along with AI integration and crafting immersive user experiences. I'm keen on finding innovative solutions to new challenges and transforming the digital landscape. My goal is to materialize creative and impactful projects in the evolving metaverse."
          </p>
        </div>
        <div className='mt-8 md:mt-16'> {/* Adjust margin-top for smaller screens */}
          <p className='text-xl'>
            "Although I haven't engaged in much physical work, I did complete an internship in Codesoft. I have a certificate to validate this experience. Despite this, I aspire to accomplish much more in my life.</p>
        </div>
        
        {/* myImage */}
        <div className="hidden lg:flex justify-center items-center py-20 " >

        <img
          src={certificate1}
          alt="my Profile"
          className="   w-2/3 md:w-full  duration-300 px-14  "
        />
      </div>
      </div>
    </div>
  )
}

export default Expeirence