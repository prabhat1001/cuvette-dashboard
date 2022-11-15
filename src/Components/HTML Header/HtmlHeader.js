import React from 'react'
import './HtmlHeader.css'

const HtmlHeader = () => {
  return (
    <div className='Header-Cont'>
       <div className='cont-1'>
          <img className='html-icon' src='/images/html.png'></img>
          <div className='cont-2'>
            <h4 className='Title'>Hypertext Markup Language</h4>
            <p className='sub-title'>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </div>
       </div>
    </div>
  )
}

export default HtmlHeader