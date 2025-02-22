import React, { useState } from 'react';
import { Users, Lightbulb, Home, Cpu } from 'lucide-react';
import HomePage from './components/HomePage';
import OutreachPage from './components/OutreachPage';
import InnovationPage from './components/InnovationPage';
import RoboticsPage from './components/RoboticsPage';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Lego Legends #62754</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'home'
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-100 hover:bg-blue-500'
                }`}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </button>
              <button
                onClick={() => setActiveTab('robotics')}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'robotics'
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-100 hover:bg-blue-500'
                }`}
              >
                <Cpu className="w-4 h-4 mr-2" />
                Robotics
              </button>
              <button
                onClick={() => setActiveTab('outreach')}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'outreach'
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-100 hover:bg-blue-500'
                }`}
              >
                <Users className="w-4 h-4 mr-2" />
                Outreach
              </button>
              <button
                onClick={() => setActiveTab('innovation')}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'innovation'
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-100 hover:bg-blue-500'
                }`}
              >
                <Lightbulb className="w-4 h-4 mr-2" />
                Innovation Project
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'robotics' && <RoboticsPage />}
        {activeTab === 'outreach' && <OutreachPage />}
        {activeTab === 'innovation' && <InnovationPage />}
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 FLL Team Lego Legends #62754. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;