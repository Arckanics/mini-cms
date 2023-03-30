import React from 'react'

const Dropdown = ({item , select}) => {
  return (
    <div className='select-dropdown'>
      {
        item.map(({value,name},i) => 
          <div 
            className='dropdown-opt' 
            value={value} 
            onClick={(e) => select(value)}
          >
            {name}
          </div>
        )
      }
    </div>
  )
}

export default Dropdown