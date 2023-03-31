import React from 'react'

const Dropdown = ({item , select}) => {
  return (
    <div className='select-dropdown'>
      {
        item.map(({value,name},i) => 
          <div 
            key={Date.now()+i}
            className='dropdown-opt' 
            value={value} 
            onClick={($event) => select($event, value)}
          >
            {name}
          </div>
        )
      }
    </div>
  )
}

export default Dropdown