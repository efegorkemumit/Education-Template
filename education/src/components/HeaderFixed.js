import React from 'react'
import Menu from './Menu'

function HeaderFixed() {
  return (
    <div>

<header className='bg-primary-light dark:bg-primary-dark text-second-light dark:text-second-dark inset-x-0 top-0 z-50 py-2 border-b border-slate-600 shadow-2xl'>

<div className='py-4'>

<Menu></Menu>


</div>


</header>


    </div>
  )
}

export default HeaderFixed