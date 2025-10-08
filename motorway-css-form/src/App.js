import React from 'react'

import SpinningGallery from './components/SpinningGallery'
import Form from './components/Form'

import './App.css'

const App = () => {
  const [showSpinningGallery, setShowSpinningGallery] = React.useState(true)

  return (
    <>
      <button
        onClick={() => {
          setShowSpinningGallery(!showSpinningGallery)
        }}
      >
        {showSpinningGallery ? 'Show form' : 'Show spinning gallery'}
      </button>
      {showSpinningGallery ? <SpinningGallery /> : <Form />}
    </>
  )
}

export default App
