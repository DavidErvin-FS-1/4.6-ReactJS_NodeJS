import React, { useEffect, useState } from 'react'
import CustomerList from '../components/CustomerList'
import { createCustomer, getCustomers } from '../services/customerServices'
import './Customers.css'

function Customers() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  useEffect(() => {
    getCustomers()
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    createCustomer({
      firstName,
      lastName,
      email,
      phoneNumber,
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Customers</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>
          First Name
          <input
            type='text'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor='lastName'>
          Last Name
          <input
            type='text'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          Email
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='phoneNumber'>
          Phone Number
          <input
            type='text'
            name='phoneNumber'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
      <code>
        <pre>
          <CustomerList />
        </pre>
      </code>
    </div>
  )
}

export default Customers
