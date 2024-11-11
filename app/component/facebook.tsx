const Facebook = () => {


       

  return (
    <div className='sm:flex md:flex lg:flex flex-1 justify-center  sm:space-x-14 fixed sm:ml-0 ml-8 sm:static sm:w-full  sm:h-screen'>
      <div className='sm:mt-44 md:mt-44 lg:mt-44 mt-36'>
       <h1 className='text-[#226ad6] font-semibold text-4xl sm:ml-0 ml-12 '>SignUp LogIn</h1>
       <p className='w-80 sm:w-96 text-xl mt-2  text-gray-800 sm:ml-0 ml-4'>Facebook helps you connect and share with the people in your life.</p>
      </div>
       <div>
      <div className='bg-white  shadow-md shadow-gray-300 p-4 sm:h-72 sm:text-center sm:mt-36 mt-32 rounded-md'>
     <input type="text" placeholder='Email address or phone number' className='caret-blue-500 rounded-md mb-2 text-sm  border p-2 border-gray-200 w-72'/><br />
     <input type="number" placeholder='Password' className='caret-blue-500 border rounded-md mb-3 p-2 text-sm border-gray-200 w-72'/><br />
     <button className='bg-[#226ad6] hover:bg-blue-500 text-white w-72 rounded-md mb-3 p-2 font-bold cursor-pointer'>Log in</button>
     <p className='text-xs text-[#5143cc] cursor-pointer hover:underline sm:ml-0 ml-24'>Forgotten password?</p><hr className='mt-5 w-72'/>
     <button className='bg-[#34bf57] text-white rounded-md p-2 mt-5 text-sm w-44 cursor-pointer hover:bg-green-600 sm:ml-0 ml-16'>Create new account</button>
     {/* <p>Create a Page for a celebrity, brand or business.</p> */}
      </div>
      <p className='text-center text-xs mt-5'><b className='cursor-pointer hover:underline '>Create a Page</b> for a celebrity, brand or business.</p>
    </div>
    </div>
  )
}

export default Facebook
