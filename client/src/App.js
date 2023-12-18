import './App.css'
import Customers from './pages/Customers'

function App() {
  const baseUrl = window.location.pathname

  return (
    <div className='App'>
      {baseUrl === '/customers' && <Customers />}
      {/* {baseUrl === '/orders' && <Orders />} */}
    </div>
  )
}

export default App
