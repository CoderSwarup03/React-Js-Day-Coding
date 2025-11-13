// src/components/DonationForm.jsx
import React, { useState } from 'react';
import { useDonation } from '../context/DonationContext';
import InputField from './InputField';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [donor, setDonor] = useState('');
  const { addDonation } = useDonation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && donor) {
      addDonation({ amount, donor, date: new Date().toLocaleDateString() });
      setAmount('');
      setDonor('');
      alert('Donation successful! Thank you.');
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Make a Transparent Donation</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Amount ($)"
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <InputField
          label="Your Name (for transparency log)"
          id="donor"
          type="text"
          value={donor}
          onChange={(e) => setDonor(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
