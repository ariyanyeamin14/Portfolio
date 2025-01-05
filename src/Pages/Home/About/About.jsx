import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/png1.png'

const About = () => {
    return (
        <div id='about' className='w-[95%] lg:w-[70%] mx-auto flex flex-col lg:flex-row  justify-between items-center py-24 gap-20'>
            <div className='p-8 shadow-2xl rounded-2xl '>
                <div className='bg-[#191e22] mx-auto rounded-2xl'>
                    <img className='w-[90%] mx-auto ' src={img} alt="" />
                </div>
            </div>
            <div className=''>
                <p className='color-main uppercase font-secondery'>
                    Visit my portfolio & Hire me</p>
                <h2 className='text-[60px] font-[700]'>About Me</h2>
                <p className=' leading-[1.9] text-[#878e99] mb-6'>
                    Hi, I’m Yeamn Foysal from Tangail, now living in Dhaka, Bangladesh. I’m an undergraduate student in Computer Science and Engineering with a deep passion for programming.
                </p>
                <p className=' leading-[1.9] text-[#878e99]  mb-6'>
                    I started learning to code at an early age and love exploring new programming languages in my free time. When I’m not coding, I enjoy traveling and discovering new places, which keeps me inspired and refreshed.
                </p>
                <p className=' leading-[1.9] text-[#878e99]'>
                    With a mix of curiosity and determination, I’m always eager to grow and make an impact in the world of technology.
                </p>
                <div className='mt-16'>
                    <Link className='color-main bg-[#1f2125] p-3 rounded-lg shadow-md' to={'https://docs.google.com/document/d/1BzEW8vkONHoERDbPd8VwOaEa13PyQgABDF7cg2dph3M/edit?usp=sharing'}>
                        DOWNLOAD MY CV
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;