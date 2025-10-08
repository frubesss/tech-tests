import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Button } from '@mui/material'

import { getLaunches } from '../features/launches/launchesSlice'
import { getLaunchPads } from '../features/launchPads/launchPadsSlice'
import State from '../features/types'

const Launches = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const launches = useSelector((state: State) => state.launches)
  const launchPads = useSelector((state: State) => state.launchPads)

  useEffect(() => {
    if (launches.status === 'idle') {
      dispatch(getLaunches())
    }
  }, [dispatch, launches.status])

  useEffect(() => {
    if (launches.status === 'idle') {
      dispatch(getLaunchPads())
    }
  }, [dispatch, launches.status])

  const getLaunchNationality = (launchLaunchPadId: string) => {
    return launchPads.data.find(
      (launchPad) => launchPad.id === launchLaunchPadId
    )?.region
  }

  const rows = launches.data.map((launch) => ({
    id: launch.id,
    name: launch.name,
    success: launch.success ? '✅' : '❌',
    upcoming: launch.upcoming ? '✅' : '❌',
    location: getLaunchNationality(launch.launchpad),
    date: launch.date_utc,
    details: launch.id,
  }))

  const columns = [
    { field: 'id', headerName: 'Id', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'success', headerName: 'Success', flex: 1 },
    { field: 'upcoming', headerName: 'Upcoming', flex: 1 },
    { field: 'location', headerName: 'Nationality/Location', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
    {
      field: 'details',
      headerName: 'Details',
      width: 150,
      renderCell: (params: { value: string }) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => navigate(`/${params.value}`)}
        >
          More Details
        </Button>
      ),
    },
  ]

  return (
    <div style={{ height: 500, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          {launches.status === 'loading' && launchPads.status === 'loading' ? (
            <div>Loading...</div>
          ) : (
            <DataGrid
              components={{
                Toolbar: GridToolbar,
              }}
              rows={rows}
              columns={columns}
              initialState={{
                sorting: {
                  sortModel: [{ field: 'date', sort: 'desc' }],
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Launches
