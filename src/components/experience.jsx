import React from 'react'

const experience = () => {
  return (
    <div name='experience'  className='pt-20 w-full h-full bg-[#0a192f] text-gray-300 mx-auto'>
              <div className='pb-8 pl-4 text-center'>
                    <p className='inline mx-auto text-4xl font-bold border-b-4 border-pink-400'>Experiences</p>
                </div>
<div class="flex items-center justify-center py-10 overflow-hidden  mx-auto">
  <div class="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg ">
    <ol class="relative border-l-4 border-indigo-600 leading-loose">
      
      <li class="mb-10 ml-6 w-[400px]">
      <div className='pb-8 pl-4 text-left'>
                    <p className='inline text-4xl font-bold border-b-4 border-pink-400'>Study</p>
                </div>
        <div
             class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"
             ></div>
        <p class="absolute -left-[4.5rem] p-0 m-0 font-bold">Present</p>
        <br/>
        <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">2022</p>
        <p class="font-bold text-lg mb-1">Tunku Abdul Rahman University Of Management And Technology</p>
        <p class="font-bold text-sm mb-2">(Jul 2022 - Jul 2024)</p>
        <p>
          Currently studying Diploma in Information Technology. Major In Web Development and Minor In Machine Learning.
        </p>
      </li>
      <li class="mb-10 ml-6 w-[400px]">
        <div
             class="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"
             ></div>
        <p class="absolute -left-[3.5rem] p-0 m-0 font-bold">
          2018
        </p>
        <p class="font-bold text-lg mb-1">SMK IDEAL HEIGHTS</p>
        <p class="font-bold text-sm mb-2">(2014 Jan - Dec 2018)</p>
        <p>
          Graduated From SMK IDEAL HEIGHTS in Business Development Stream (Accounting, Economics and Business Studies)
        </p>
      </li>

    </ol>
  </div>
</div>
</div>
  )
}

export default experience
