import React from 'react'

const Footer = () => {
  return (
    <section
      className='min-h-full w-full bg-black'
      id='Footer'
    >
      <div
        className='text-center mb-4 flex justify-center  '
      >
        <h2
          className='text-4xl font-bold m1-10 '
        > Priyanshu Kumar Gupta</h2>
      </div>
      <div className='w-50 h-1 bg-gradient-to-r from-[#1cd8d2] via-[#00b8f8] to-[#302b63]
                shadow-lg hover:scale-105 transition-all mx-auto m-4'></div>
      <div className='text-center '>
        <p className='text-gray-400 text-center m-14 text-lg font-semibold'>© 2024 Priyanshu Kumar Gupta. All rights reserved.</p>
      </div>

    </section>
  )
}

export default Footer