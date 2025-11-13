// src/components/DonationTracker.jsx
import React from 'react';
import { useDonation } from '../context/DonationContext';
import StatCard from './StatCard';

const DonationTracker = () => {
  const { donations, totalDonations } = useDonation();

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <StatCard title="Total Donations Received" value={`$${totalDonations.toFixed(2)}`} />
        <StatCard title="Total Transactions" value={donations.length} />
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Transparency Log</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {donations.map((donation) => (
            <li key={donation.id} className="px-6 py-4 flex justify-between items-center">
              <div>
                <p className="text-gray-900 font-semibold">{donation.donor}</p>
                <p className="text-sm text-gray-500">{donation.date}</p>
              </div>
              <p className="text-green-600 font-bold">${parseFloat(donation.amount).toFixed(2)}</p>
            </li>
          ))}
        </ul>
        {donations.length === 0 && (
          <p className="text-center py-8 text-gray-500">No donations yet. Be the first!</p>
        )}
      </div>
    </div>
  );
};

export default DonationTracker;
