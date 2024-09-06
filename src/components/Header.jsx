import { Navbar, TextInput, Button } from 'flowbite-react';
import React from 'react';
import { Link,useLocation } from 'react-router-dom';  // Import useLocation to get the path
import { AiOutlineSearch } from 'react-icons/ai';  // Correct the case here
import { FaMoon } from 'react-icons/fa';

export default function Header() {
 // Get the current path
const path =useLocation().pathname
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-gray-500 rounded-lg text-white">
          WRITERS
        </span>
        Space
      </Link>
      
      <form className="flex-1">
        <TextInput
          type="text"
          placeholder="Search..."
          icon={AiOutlineSearch}  // Use 'icon' prop instead of 'rightIcon' in Flowbite
        />
      </form>
      
      <div className="flex gap-2 md:order-2">
        <button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </button>
        <button className="w-12 h-10 lg:hidden sm:inline" color="gray" pill>
          <FaMoon />
        </button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue">Sign In</Button>
        </Link>
        
        <Navbar.Toggle />
      </div>
      
      <Navbar.Collapse>
        <Navbar.Link active={location.pathname === "/"} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={location.pathname === "/about"} as={'div'}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={location.pathname === "/projects"}as={'div'}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
