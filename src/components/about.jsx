import React from 'react'

const about = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col flex-wrap justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-400'>About</p>
                </div>
                <div>
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div>
                        <p className='mx-auto text-3xl font-bold pb-4'>Hi. I'm William, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='mx-auto text-2xl'>I'm Passionate about everything in tech,all about Machine Learning,Web Development also DevOps!</p>
                        
                    </div>
   
                </div>
                <div>
                <div>
                <p className='mx-auto text-2xl'>I'm Currently Studying Diploma in Information Technology in <span className='text-2xl text-bold text-cyan-300 hover:underline' ><a href='https://www.tarc.edu.my/' target='_blank' rel="noopener noreferrer" >Tunku Abdul Rahman University Of Management and Technology</a></span></p>
                </div>
                <div>
                        <p className='py-4 mx-auto text-2xl'>I'm looking for opprutinities to participate in Machine Learning & Web Development Field. </p>
                    </div>

                </div>
            </div>

      </div>
    </div>
  )
}

export default about
