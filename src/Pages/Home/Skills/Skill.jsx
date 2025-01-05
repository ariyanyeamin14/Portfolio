import React from 'react';
import tailwindImg from '../../../assets/Skills/tailwind.png'
import javascriptImg from '../../../assets/Skills/javascript.png'
import reactImg from '../../../assets/Skills/react.png'
import firebaseImg from '../../../assets/Skills/firebase.png'
import nodeImg from '../../../assets/Skills/node.png'
import mongodbImg from '../../../assets/Skills/mongodb.png'

const Skill = () => {
    return (
        <div id='skills' className='text-center py-20 overflow-hidden'>
            <p className='color-main uppercase font-secondery'>See my expertise</p>
            <h1 className='text-[60px] font-[700]'>My Skills </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 w-[70%] mx-auto items-center mt-14'>
                <div className='mx-auto'>
                    <div className='flex flex-col items-center gap-16 w-fit py-16 px-14 bg-[#191e22] rounded-full border-2 border-[#2c353e] '>
                        <div>
                            <img className='w-[70px]' src={tailwindImg} alt="" />
                        </div>
                        <div>
                            <h1 className='text-4xl font-semibold'>95%</h1>
                            <h3 className='font-semibold mt-4 text-lg '>Tailwind css</h3>
                        </div>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='flex flex-col items-center gap-36 w-fit py-16 px-14 bg-[#191e22] rounded-full border-2 border-[#2c353e]'>
                        <div>
                            <img className='w-[70px]' src={javascriptImg} alt="" />
                        </div>
                        <div>
                            <h1 className='text-4xl font-semibold'>85%</h1>
                            <h3 className='font-semibold mt-4 text-lg '>Javascript</h3>
                        </div>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='flex flex-col items-center gap-16 w-fit py-16 px-14 bg-[#191e22] rounded-full border-2 border-[#2c353e]'>
                        <div>
                            <img className='w-[70px]' src={reactImg} alt="" />
                        </div>
                        <div>
                            <h1 className='text-4xl font-semibold'>90%</h1>
                            <h3 className='font-semibold mt-4 text-lg '>React Js</h3>
                        </div>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='flex flex-col items-center gap-36 w-fit py-16 px-14 bg-[#191e22] rounded-full border-2 border-[#2c353e]'>
                        <div>
                            <img className='w-[70px]' src={firebaseImg} alt="" />
                        </div>
                        <div>
                            <h1 className='text-4xl font-semibold'>98%</h1>
                            <h3 className='font-semibold mt-4 text-lg '>Firebase</h3>
                        </div>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='flex flex-col items-center gap-16 w-fit py-16 px-14 bg-[#191e22] rounded-full border-2 border-[#2c353e]'>
                        <div>
                            <img className='w-[70px]' src={nodeImg} alt="" />
                        </div>
                        <div>
                            <h1 className='text-4xl font-semibold'>70%</h1>
                            <h3 className='font-semibold mt-4 text-lg '>Node JS</h3>
                        </div>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='flex flex-col items-center gap-36 w-fit py-16 px-14 bg-[#191e22] rounded-full border-2 border-[#2c353e]'>
                        <div>
                            <img className='w-[70px]' src={mongodbImg} alt="" />
                        </div>
                        <div>
                            <h1 className='text-4xl font-semibold'>80%</h1>
                            <h3 className='font-semibold mt-4 text-lg '>MongoDB</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;