import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-[#b5b5b5] flex justify-center items-center p-4'>
        <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-300 text-black'>Contact</p>
                <p className='text-black py-4'>Submit the form below or shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='text-[#233dff] bg-white p-2' type="text" placeholder='Name' name='name' />
            <input className='text-[#233dff] my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
            <textarea className='text-[#233dff] bg-white] p-2' name="message" rows="8" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:text-yellow-300 hover:border-yellow-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact