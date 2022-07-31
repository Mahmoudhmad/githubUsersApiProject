import React from 'react'
import {Link} from "react-router-dom";
function Navbar() {

	function showMenu(){
    
				const menu = document.querySelector("#list-menu");
						
				menu.classList.toggle("hidden");
				
            }
			const links = [{name:"home",link:"/"},
							{name:"about",link:"/About"},
							{name:"contact",link:"/Contact"},					] 
  return (

	<header className="bg-gray-800 text-white">
		<div className="container mx-auto px-3 py-2 pt-2 md:px-7 flex justify-between flex-wrap ">
			<div className='mt-1 lg:pl-4 '>
				<Link to="/" className="text-3xl py-2">
					<span className="font-bold capitalize hover:text-purple-300 sans-serif font-serif">github users</span>
				</Link>
			</div>

<label className="block md:hidden cursor-pointer 
self-center mr-2">
	
	<button className="outline-none menu" onClick={showMenu}>

			<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 my-2"
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
				<path d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>


</label>

	

			<div className="hidden w-full text-center md:flex md:w-auto " id='list-menu'>
				<ul className='pt-5 md:pt-0  md:flex'>
					{
					links.map((listLink) => (
					<Link to={listLink.link}>
						<li className="py-2 mx-4  capitalize cursor-pointer rounded-lg hover:bg-blue-600
					hover:text-purple-300 md:p-3">{listLink.name}</li>
					</Link>
					))
}
				</ul>
				
			</div>

		</div>

	</header>

 
  )

 
}


export default Navbar;