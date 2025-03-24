import React from 'react';
import DonnaAssistant from './components/DonnaAssistant';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-donna-dark text-white relative overflow-hidden">
      <Background />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <main>
          <DonnaAssistant />
        </main>
      </div>
    </div>
  );
}

export default App; 