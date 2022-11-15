import React from 'react'
import './SideBar.css'

const Sidebar = () => {
  return (
    <div className='Container'>
            <div className='SidebarMenu '>
                <li className='SidebarItem'>
                    <img src='/images/dashboard-icon.png' alt='dashboard-icon'></img>
                    <span> Dashboard </span>
                </li>
                <li className='SidebarItem active'>
                    <img src='/images/award.png' alt='skills-icon'></img>
                    <span> Skill Test</span>
                </li>
                <li className='SidebarItem'>
                    <img src='/images/internships-icon.png' alt='internships-icon'></img>
                    <span> Internships </span>  
                </li>
            </div>
    </div>
  )
}

export default Sidebar