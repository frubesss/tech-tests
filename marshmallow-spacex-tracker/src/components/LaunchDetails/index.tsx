import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import falconHeavy from './falcon_heavy.webp'

import { getLaunch } from '../../features/launch/launchSlice'
import State from '../../features/types'

const LaunchDetails = () => {
  const { launchId } = useParams()

  const dispatch = useDispatch()

  const launch = useSelector((state: State) => state.launch)

  useEffect(() => {
    dispatch(getLaunch(launchId ?? ''))
  }, [dispatch, launchId])

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {launch.status === 'loading' ? (
        <Typography variant="h5">Loading...</Typography>
      ) : (
        <Card sx={{ margin: '16px', maxWidth: 345 }}>
          <CardMedia component="img" image={falconHeavy} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {launch.data?.name ?? 'N/A'}
            </Typography>
            <Typography gutterBottom variant="body1" color="text.secondary">
              {launch.data?.details}
            </Typography>

            <Typography gutterBottom variant="body2" color="text.secondary">
              <strong>Flight Number:</strong>{' '}
              {launch.data?.flight_number ?? 'N/A'}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              <strong>Launch Date UTC:</strong> {launch.data?.date_utc ?? 'N/A'}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              <strong>Launch Date Local:</strong>{' '}
              {launch.data?.date_local ?? 'N/A'}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              <strong>Upcoming:</strong> {launch.data?.upcoming ? '✅' : '❌'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Success:</strong> {launch.data?.success ? '✅' : '❌'}
            </Typography>
          </CardContent>
          {launch.data?.links?.wikipedia ? (
            <CardActions>
              <Button
                size="small"
                color="primary"
                href={launch.data.links.wikipedia}
              >
                Learn More
              </Button>
            </CardActions>
          ) : null}
        </Card>
      )}
    </div>
  )
}

export default LaunchDetails
