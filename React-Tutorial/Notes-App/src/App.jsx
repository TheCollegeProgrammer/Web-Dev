import React from 'react'

const App = () => {

  const SubmitHandler = (e) =>{
    e.preventDefault()
    console.log("Form Submitted");
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e) =>{
        SubmitHandler(e)
      }} className='flex justify-between items-start p-10 ml-10'>
        <div className='flex flex-col items-start w-1/2 gap-4'>

        <input 
        type='text' 
        placeholder='Enter Notes Heading' 
        className='px-5 py-2 w-full border-2 rounded mt-7 outline-none'
        />

        <textarea 
        name='' 
        id='' 
        className='px-5 h-32 py-2 w-full border-2  rounded outline-none'
        placeholder='Write Details'
        />

        <button className='bg-white text-black px-5 py-2 w-full rounded-2 font-extrabold outline-none'>Add Notes</button>
        </div>
        <img className='h-100' src='https://file.aiquickdraw.com/imgcompressed/img/compressed_8491c5857e7491d29a7561ac118b13cc.webp'></img>
        
      </form>
    </div>
  )
}

export default App
