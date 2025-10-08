import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import Form from './index'

describe('Form', () => {
  it('user can submit there personal details', async () => {
    await act(async () => {
      render(<Form />)
    })

    screen.getByText('Personal Details')

    fireEvent.change(screen.getByLabelText('Name:'), {
      target: { value: 'Craig Robertson' },
    })
    fireEvent.change(screen.getByLabelText('Email:'), {
      target: { value: 'robertson.cra@gmail.com' },
    })
    fireEvent.change(screen.getByLabelText('Date of birth:'), {
      target: { value: '1990-08-08' },
    })
    fireEvent.change(screen.getByLabelText('Salary:'), {
      target: { value: '123' },
    })

    fireEvent.submit(screen.getByRole('button'))

    await screen.findByText('Name: Craig Robertson')
    await screen.findByText('Email: robertson.cra@gmail.com')
    await screen.findByText('Favourite color: #000000')
    await screen.findByText('Salary: £123')
  })

  it('user can not submit an invalid form', async () => {
    await act(async () => {
      render(<Form />)
    })

    screen.getByText('Personal Details')

    fireEvent.submit(screen.getByRole('button'))

    await screen.findByText('Please insert your name')
    await screen.findByText('Please insert your email')
    await screen.findByText('Please select your date of birth')
    await screen.findByText('Please insert your salary')

    expect(screen.queryByText('Submitted details')).toBeNull()

    fireEvent.change(screen.getByLabelText('Email:'), {
      target: { value: 'helloworld' },
    })

    await screen.findByText('Invalid email')

    fireEvent.change(screen.getByLabelText('Salary:'), {
      target: { value: '-1232' },
    })

    await screen.findByText('Please insert a positive number')

    fireEvent.submit(screen.getByRole('button'))

    expect(screen.queryByText('Submitted details')).toBeNull()
  })
})
