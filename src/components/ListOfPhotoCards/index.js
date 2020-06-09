import React from 'react'
import { PhotoCard } from '../PhotoCard/index'

const ListOfPhotoCardsComponents = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}

export const ListOfPhotoCardsComponent = React.memo(ListOfPhotoCardsComponents)
