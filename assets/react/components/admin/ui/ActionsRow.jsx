import React from 'react'
import Delete from '../../../icon/icon-ui/Delete'
import Edit from '../../../icon/icon-ui/Edit'

const ActionsRow = ({ id, update, remove }) => {
  return (
    <div className='flex flex-row flex-nowrap justify-center gap-3'>
      <div className='action-button secondary' onClick={(e) => update(id)}>
        <Edit cls='action-icon edit'/>
      </div>
      <div className='action-button secondary' onClick={(e) => remove(id)}>
        <Delete cls='action-icon delete'/>
      </div>
    </div>
  )
}

export default ActionsRow