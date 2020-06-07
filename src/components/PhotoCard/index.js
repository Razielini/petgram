import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log('error::', error.message)
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (error) {
      console.log('error::', error.message)
    }
  }

  return [storedValue, setLocalStorage]
}

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setliked] = useLocalStorage(key, false)
  const ref = useRef(null)

  console.log('liked::', liked)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        console.log({ isIntersecting })
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })

      observer.observe(ref.current)
    })
  }, [ref])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {
        show && <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setliked(!liked)}>
            <Icon size='32' /> {likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}
