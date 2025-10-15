import React, { createContext, useContext, useState } from 'react'
const NotificationContext = createContext();
export const useNotificaion = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState([]);

    const addNotification = (message, type = 'info') => {
        const id = Date.now();
        const newNofication = {id, message, type};
        setNotification((prev) => [...prev,newNofication])

        setTimeout(() => {
            setNotification(notification.filter((item)=> item.id !== id))
        }, [3000]);
    }


    return (
        <>
            <NotificationContext.Provider value={{notification, addNotification}}>
                {children}
            </NotificationContext.Provider>
        </>
    )
}

export default NotificationProvider