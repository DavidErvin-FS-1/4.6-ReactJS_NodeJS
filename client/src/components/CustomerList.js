import React, { useEffect, useState } from 'react'
import { getCustomers } from '../services/customerServices'

function CustomerList() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCustomers()
        setCustomers(response.data)
      } catch (error) {
        console.error('Error fetching customers:', error)
      }
    }

    fetchData()
  }, [])

  return <pre>{JSON.stringify(customers.data, null, 2)}</pre>
}

export default CustomerList
