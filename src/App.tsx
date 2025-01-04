import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CountdownScreen } from './components/CountdownScreen';

function App() {
  const [showCountdown, setShowCountdown] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      {showCountdown ? (
        <CountdownScreen />
      ) : (
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-6xl md:text-8xl font-bold mb-6">2025</h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
            A minimalist landing page template for the year 2025. Perfect for personal websites, portfolios, and simple landing pages.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => setShowCountdown(true)}
              className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              View Countdown
            </button>
            <a
              href="#"
              className="px-8 py-3 border border-white rounded-full font-medium hover:bg-white hover:text-black transition-colors"
            >
              Learn More
            </a>
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;