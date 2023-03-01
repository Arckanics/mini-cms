import React, { useEffect, useState } from 'react'
import ContentNav from '../ui/ContentNav'

const Pages = ({ data, ajax }) => {

  const [state, setState] = useState(null)

  useEffect(() => {
    ajax.get(data.url)
      .then(res => {
        setState(res.data)
      })
  }, [])

  const header = [
    {tag: 'title', name: 'titre', draw: 'value', colSize: 6},
    {tag: 'settings', name: 'landing', draw: 'bool', colSize: 1}
  ]

  return (
    <div className="content-full">
      <div className='title mb-8'>Pages</div>
      { state && <ContentNav data={state} header={header} />}
    </div>
  )
}

export default Pages