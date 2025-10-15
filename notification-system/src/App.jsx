import React from 'react'
import { useNotificaion } from './context/NotificationProvider'
import NotificationList from './components/NotificationList';
const MainApp = () => {
  const { addNotification } = useNotificaion();

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6 mt-5'>
        <h1 className='text-3xl font-bold text-blue-500'>🔔Nonification System</h1>
        <div className='space-x-3'>
          <button
            onClick={()=> addNotification('This is Info message')}
            className='bg-blue-500 text-white font-semibold px-4 py-2 rounded-md cursor-pointer'>
            Info
          </button>

           <button
            onClick={()=> addNotification('This is Success message',"success")}
            className='bg-green-500 text-white font-semibold px-4 py-2 rounded-md cursor-pointer'>
            Success
          </button>

           <button
            onClick={()=> addNotification('This is Error message','error')}
            className='bg-red-500 text-white font-semibold px-4 py-2 rounded-md cursor-pointer'>
            Error
          </button>
        </div>
      </div>
    </>
  )
}

const App = () => {
  return (
    <>
      <MainApp />
      <NotificationList />
    </>
  )
}

export default App