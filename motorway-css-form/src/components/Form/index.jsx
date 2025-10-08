import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import './index.css'

const formValidationSchema = yup
  .object({
    name: yup.string().required('Please insert your name'),
    email: yup
      .string()
      .required('Please insert your email')
      .email('Invalid email'),
    dateOfBirth: yup.string().required('Please select your date of birth'),
    salary: yup
      .number()
      .typeError('Please insert your salary')
      .positive('Please insert a positive number'),
  })
  .required()

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidationSchema),
  })

  const [submittedFormData, setSubmittedFormData] = React.useState(null)

  const onSubmit = (formValues) => {
    setSubmittedFormData(formValues)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <section>
        <h1>Personal Details</h1>

        <label htmlFor="name">Name:</label>
        <input id="name" {...register('name')} />
        {errors.name ? <span role="alert">{errors.name.message}</span> : null}

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" {...register('email')} />
        {errors.email ? <span role="alert">{errors.email.message}</span> : null}

        <label htmlFor="dateOfBirth">Date of birth:</label>
        <input id="dateOfBirth" type="date" {...register('dateOfBirth')} />
        {errors.dateOfBirth ? (
          <span role="alert">{errors.dateOfBirth.message}</span>
        ) : null}

        <label htmlFor="favouriteColor">Favourite color:</label>
        <input
          id="favouriteColor"
          type="color"
          {...register('favouriteColor')}
        />

        <label htmlFor="salary">Salary:</label>
        <input id="salary" type="number" {...register('salary')} />
        {errors.salary ? (
          <span role="alert">{errors.salary.message}</span>
        ) : null}

        <input type="submit" value="Submit" />
      </section>
      {submittedFormData ? (
        <section className="submitted-form-data">
          <h2>Submitted Details</h2>
          <p>Name: {submittedFormData.name}</p>
          <p>Email: {submittedFormData.email}</p>
          <p>Date of birth: {submittedFormData.dateOfBirth}</p>
          <p>Favourite color: {submittedFormData.favouriteColor}</p>
          <p>Salary: £{submittedFormData.salary}</p>
        </section>
      ) : null}
    </form>
  )
}

export default Form
