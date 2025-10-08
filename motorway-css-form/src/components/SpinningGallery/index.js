import React, { useEffect, useState } from 'react'
import './index.css'

const SpinningGallery = () => {
  const [images, setImages] = useState()

  useEffect(() => {
    fetch('http://localhost:5005/images')
      .then((res) => res.json())
      .then((data) => {
        setImages(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <div className="container">
      <div className="main">
        {images
          ? images.map((image, i) => (
              <div
                key={image.id}
                className="item"
                style={{
                  animationDelay: `-${i}s`,
                  animationDuration: `${images.length}s`,
                }}
              >
                <img
                  style={{
                    marginRight: '50px',
                    marginLeft: '300px',
                  }}
                  src={`${image.url}.jpg`}
                  alt={image.alt_description}
                  loading="lazy"
                  width={50}
                  height={50}
                />
                <img
                  src={`${image.user.profile_image}.webp`}
                  alt={image.user.name}
                  loading="lazy"
                  width={50}
                  height={50}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default SpinningGallery
