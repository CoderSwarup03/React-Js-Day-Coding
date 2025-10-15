import React from 'react'
import { useNotificaion } from '../context/NotificationProvider'

const NotificationList = () => {
    const { notification } = useNotificaion();
    return (
        <>
            <div className='fixed top-4 right-4 space-y-3 z-50'>
                {notification.map((item) => (
                    <div
                        key={item.id}
                        className={`px-3 py-2 rounded-md shadow-md text-white font-semibold transition-all
                            ${item.type === 'success'
                                ? 'bg-green-500'
                                : item.type === 'error'
                                ? 'bg-red-500'
                                : 'bg-blue-500'
                            }`}
                    >
                        {item.message}
                    </div>
                ))}
            </div>
        </>
    )
}

export default NotificationList