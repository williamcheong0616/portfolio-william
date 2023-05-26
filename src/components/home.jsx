import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='bg-[#0a192f] w-full h-screen '>
      
    {/*Container*/}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className=' text-2xl text-white'>Hi! My Name Is</p>
        <h1 className='text-4xl sm:7xl font-bold text-[#ccd6f6]'>William Cheong</h1>
        <h2 className='text-3xl sm:7xl font-bold text-[#8892b0]'>Full Stack Developer & Machine Learning Enthusiastist</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full stack developer based in Malaysia specializing in building exceptional websites, applications, and everything in between. <br/><br/> I'm also a Machine Learning Enthusiastist who is passionate about building AI that can help people in their daily lives.</p>


        <div>
            <button className='group text-white rounded border-2 px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r  from-cyan-500 to-blue-500'>
            Know More
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight />
                </span>
            </button>
        </div>
</div>
    </div>
  )
}

export default Home
