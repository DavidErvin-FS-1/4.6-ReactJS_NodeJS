import axios from 'axios'

export const getOrders = async () => {
  return await axios.get('/api/orders')
}

export const getOrder = async (id) => {
  return await axios.get(`/api/orders/${id}`)
}

export const createOrder = async (order) => {
  return await axios.post('/api/orders', order)
}

export const updateOrder = async (id, order) => {
  return await axios.put(`/api/orders/${id}`, order)
}

export const deleteOrder = async (id) => {
  return await axios.delete(`/api/orders/${id}`)
}
