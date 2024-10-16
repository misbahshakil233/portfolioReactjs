import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='p-b-8'>
                <p className='text-4xl font-bold inline border-b-4 border-ray-500'>Contact with me</p>
                <p className='py-6'>Submit the Form and can get touch with me..</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/pbqgerwb' method='POST'
                className='flex flex-col w-full md:w-1/2'>
                    <input
                    type='text' name='name' placeholder='Enter Your name' 
                    className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    
                    <input
                    type='Email' name='Email' placeholder='Enter Your Email' 
                    className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    
                    <textarea name='message' rows='10' placeholder='Enter Your Message'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                         </textarea>
                         <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer
                         hover:scale-105 duration-300">Let's talk</button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Contact