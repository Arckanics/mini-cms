import React from 'react'

const Footer = () => {
  return (
    <footer id='admin-footer'>
      <div className='link-group'>
        <div className='link-prev'>Créateur : </div>
        <a target='_blank' className='link' href='https://github.com/Arckanics'>
          GitHub.
        </a>
      </div>
      <div className='link-group'>
        <a target='_blank' className='link' href='https://github.com/Arckanics/mini-cms'>
          à propos
        </a>
      </div>
    </footer>
  )
}

export default Footer