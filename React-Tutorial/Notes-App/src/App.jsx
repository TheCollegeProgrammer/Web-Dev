import React from 'react'

const App = () => {

  const SubmitHandler = (e) =>{
    e.preventDefault()
    console.log("Form Submitted");
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) =>{e
        SubmitHandler(e)
      }} className='flex items-start p-10 ml-10 lg:w-1/2'>
        <div className='flex flex-col items-start w-full ml-5 mr-5 gap-4'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
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
        {/* <img className='h-100' src='https://file.aiquickdraw.com/imgcompressed/img/compressed_8491c5857e7491d29a7561ac118b13cc.webp'></img> */}
        
      </form>
      <div className="lg:w-1/2 p-10 lg:border-l-2">
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className="flex gap-5 flex-wrap mt-5 h-full overflow-auto">
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default App
