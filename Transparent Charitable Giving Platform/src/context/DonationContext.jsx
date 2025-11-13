// src/context/DonationContext.jsx
import React, { createContext, useState, useContext } from 'react';

const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);

  const addDonation = (donation) => {
    setDonations((prevDonations) => [...prevDonations, { ...donation, id: Date.now() }]);
    setTotalDonations((prevTotal) => prevTotal + parseFloat(donation.amount));
  };

  return (
    <DonationContext.Provider value={{ donations, totalDonations, addDonation }}>
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = () => useContext(DonationContext);
