import React from 'react';

function About() {
  return (
    <div className='container grid place-items-center font-serif'>
        <h2 className='capitalize text-bold text-2xl my-3 md:text-4xl md:my-3'>Who're Github Creators team?</h2>
          <div className='text-center  text-1xl mb-3 md:text-2xl md:my-5'>
            <h5>They are a team who build all types of websites.</h5>
              <p>Whenever you got stuck you can find us</p>

              <p>We are always happy to help &#128516;</p>

          </div> 
      
         <img className='mt-4 h-56 w-64 md:h-full md:w-96' src={require('../images/happyToHelp.jpg')} alt="" />
      
    </div>
  )
}




export default About