import axios from 'axios'

const api = process.env.API || 'http://localhost:3000/api/v1/customer'

export const getCustomers = async () => {
  return await axios.get(api)
}

export const getCustomer = async (id) => {
  return await axios.get(`/api/customers/${id}`)
}

export const createCustomer = async (customer) => {
  return await axios
    .post(api, customer)
    .then((response) => {
      console.log('Success response from server:', response)
      // Handle success
    })
    .catch((error) => {
      console.error('Error response from server:', error.response)
      // Handle error
    })
}

export const updateCustomer = async (id, customer) => {
  return await axios.put(`/api/customers/${id}`, customer)
}

export const deleteCustomer = async (id) => {
  return await axios.delete(`/api/customers/${id}`)
}
