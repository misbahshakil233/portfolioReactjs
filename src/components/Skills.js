import React from 'react';
import s1 from '../images/s1.jpg';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';
import s4 from '../images/s4.png';
import s5 from '../images/s5.jpeg';
import s6 from '../images/s6.jpeg';
import s7 from '../images/s7.png';
import s8 from '../images/s8.jpeg';
import s9 from '../images/s9.png';

const Skills = () => {
    const Skill = [
        { id: 1, src: s1 ,title:"HTML" , style:'shadow-orange-500'},
        { id: 2, src: s2 ,title:"CSS3" , style:'shadow-blue-300'},
        { id: 3, src: s3 ,title: "Tailwind CSS", style:'shadow-green-300'},
        { id: 4, src: s4 ,title: "Bootstap", style:'shadow-purple-500'},
        { id: 5, src: s5 ,title:"JAVASCRIPT" , style:'shadow-yellow-600'},
        { id: 6, src: s6 ,title:"TYPESCRIPT" , style:'shadow-blue-300'},
        { id: 7, src: s7 ,title:"REACTJS" , style:'shadow-blue-300'},
        { id: 8, src: s8 ,title:"NEXTJS" , style:'shadow-purple-300'},
        { id: 9, src: s9 ,title:"GITHUB" , style:'shadow-purple-300',href: 'https://github.com/misbahshakil233'},
    ];

    return (
        <div name="Skill" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='p-b-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-ray-500'>Skills</p>
                    <p className='py-6'>Explore a glimpse of my latest creations now...</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {Skill.map(({ id, src,title,style,href }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:rotate-180
                        hover:bg-blue-800 ${style}`}>

                            <img src={src} className='w-20 mx-auto' alt={`Skill ${id}`} />
                            <p className='mt-4'>{title}</p>
                            <a href={href} target="_blank" ></a>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
