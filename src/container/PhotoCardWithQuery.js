import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const query = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        console.log('data::', data)
        console.log('error::', error)
        console.log('loading::', loading)
        if (loading) return null
        const { photo = {} } = data
        return <PhotoCard {...photo} />
      }
    }
  </Query>
)
