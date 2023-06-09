import React from 'react';

const About = () => {
  return (
<div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
<div className='flex flex-col items-center justify-center w-full h-full'>
  <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
    <div className='pb-8 pl-4 sm:text-right'>
      <p className='inline text-4xl font-bold border-b-4 border-pink-600'>
        About
      </p>
    </div>
    <div></div>
    </div>
    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
      <div className='text-4xl font-bold sm:text-right'>
      <p className='pb-4 text-3xl font-bold text-center md:text-left'>Hi. I'm William, nice to meet you. Please take a look around.</p>
      </div>
      <div>
      <p className='text-xl text-center md:text-left'>I'm passionate about everything in tech, all about Machine Learning, Web Development, and DevOps!</p>
      <br/>
      <p className='text-xl text-center md:text-left'>I'm currently studying Diploma in Information Technology at <span className='text-xl font-bold text-cyan-300 hover:underline'><a href='https://www.tarc.edu.my/' target='_blank' rel='noopener noreferrer'>Tunku Abdul Rahman University Of Management and Technology</a></span></p>
      <br/>
      <p className='py-4 text-xl text-center md:text-left'>I'm looking for opportunities to participate in the Machine Learning & Web Development field.</p>
      </div>
    </div>
</div>
</div>
  );
};

export default About;
