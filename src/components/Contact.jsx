import React, { useState } from 'react'
import Modal from "./Modal";

function Contact() {
 const [showModal,setShowModal]=useState(false);

 const closeModal = () =>setShowModal(false);

 const [fullName, setFullName] = useState('');

  const getName = name => {
    setFullName(name.target.value);
    
  }

  return (
     <div className='container grid place-items-center'>
        <form className="w-full max-w-sm bg-gray-700 p-12 m-5 md:max-w-md lg:max-w-2xl xl:max-w-4xl">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="full-name">
        Full Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
      id="full-name" type="text" placeholder="Enter your name" onChange={getName}/>
    </div>
  </div>
  

    <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-2" for="message">
        Send Message
      </label>
    </div>
    <div className="md:w-2/3">
      <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full pt-2 pb-11 px-4
       text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
      id="message" type="text" placeholder="Enter your message">
      </textarea>
    </div>
  </div>

  
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3"></div>
    <label className="md:w-2/3 block text-gray-500 font-bold">
      <input className="mr-2 leading-tight" type="checkbox"/>
      <span className="text-sm md:text-md">
        Are you satisfied?
      </span>
    </label>
  </div>


  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 transition ease-in-out duration-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded md:px-8" 
      type="button"  onClick={()=>setShowModal(true)}>
        Submit
      </button>

      <button className="shadow bg-blue-900 hover:bg-blue-600 transition ease-in-out duration-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 ml-1 md:ml-2 lg:ml-3  rounded md:px-8" 
     type="reset" >
        reset
      </button>
    </div>
  </div>
</form>

<Modal name={fullName} onClose={closeModal} visible={showModal}/>
</div>

  );
}


export default Contact;