import React, {useEffect,  useState} from 'react'
import { Link } from 'react-router-dom';

function Menu() {

    const [theme, setTheme] =useState(
        localStorage.theme === 'dark' || (!('theme' in localStorage) && 
          window.matchMedia('(prefers-color-scheme:dark)').matches) ?'dark' : 'light'
    
    
      );
    
      const toogleTheme = (selectedTheme)=>{
        setTheme(selectedTheme);
        localStorage.theme=selectedTheme;
    
      }
    
      useEffect(()=>{
        document.documentElement.classList.toggle('dark', theme==='dark');
      },[theme]);

  return (
    <div>

<div className='container mx-auto flex items-center justify-between px-4'>
               <div className=' text-white text-xl  transition font-bold'>Logo</div>

               <div className='hidden md:flex space-x-4'>
               <Link to="/"> <a className='text-white text-xl hover:underline transition '>Home</a> </Link> 
                      <a href='#' className='text-white text-xl hover:underline transition '>Programming</a>
                      <a href='#' className='text-white text-xl hover:underline transition '>Chemical</a>
                      <a href='#' className='text-white text-xl hover:underline transition '>Maths</a>
                      <a href='#' className='text-white text-xl hover:underline transition '>Physical</a>
                    <Link to="/Contact"> <a className='text-white text-xl hover:underline transition '>Contact</a>
                    </Link> 
               </div>

               <div className='flex items-center space-x-4'>
                     <a href='#' className='text-white text-xl hover:underline transition  '>Login</a>

                     <a onClick={()=>toogleTheme('dark')} className={`text-white text-xl ${theme=='dark'? 'hidden':'block'}`}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg></a>

<a onClick={()=>toogleTheme('light')}  className={`text-white text-xl ${theme=='light'? 'hidden':'block'}`}>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" cursor-pointer w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

</a>

<a href='#' className='text-white text-xl lg:hidden flex'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>


                   
  </a>

               </div>

          </div>
    </div>
  )
}

export default Menu