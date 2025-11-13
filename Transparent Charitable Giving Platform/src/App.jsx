// src/App.jsx
import React from 'react';
import { DonationProvider } from './context/DonationContext';
import DonationForm from './components/DonationForm';
import DonationTracker from './components/DonationTracker';
import Header from './components/Header'; // You can create a simple header component

function App() {
  return (
    <DonationProvider>
      <div className="min-h-screen bg-gray-100">
        {/* Simple Header Component */}
        <header className="bg-indigo-700 p-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-white text-xl font-semibold">Transparent Giving Platform</h1>
          </div>
        </header>
        
        <main className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DonationForm />
            <DonationTracker />
          </div>
        </main>
      </div>
    </DonationProvider>
  );
}

export default App;
