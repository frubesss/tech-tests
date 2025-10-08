import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Link } from '@mui/material'

import Launches from './components/Launchs'

import LaunchDetails from './components/LaunchDetails'

function App() {
  return (
    <>
      <CssBaseline />
      <Box mb={4}>
        <AppBar position="static">
          <Toolbar>
            <Link variant="h6" color="white" href="/" underline="none">
              Marshmallows Rocket Gazer 🚀
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Launches />} />
        <Route path="/:launchId" element={<LaunchDetails />} />
      </Routes>
    </>
  )
}

export default App
