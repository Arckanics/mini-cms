import React from 'react'
import { PagesContainer } from '../ui'
import { SocialCard } from '../ui/Inputs'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faAdd)
import { FontAwesomeIcon as Faw } from '@fortawesome/react-fontawesome'

// dev code

const data = [
  {name: "facebook", icon: "facebook", url: "..."},
  {name: "instagram", icon: "instagram", url: "..."},
  {name: "github", icon: "github", url: "..."},
]

//====


const Footer = () => {
  return (
    <PagesContainer title="Pied de page" inDesign={false} >
      <div className='card-nav'>
        {
          data.map(({name,icon,url},k) => <SocialCard key={k} icon={icon} name={name} url={url} />)
        }
        <div className='card new'>
          <Faw icon="add" />
        </div>
      </div>

    </PagesContainer>
  )
}

export default Footer