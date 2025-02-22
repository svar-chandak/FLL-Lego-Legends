import React from 'react';
import { Droplet, Sun, Wind } from 'lucide-react';

const InnovationPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Innovation Project</h1>
        <p className="text-xl text-gray-600">Oxygenated Biodomes: Revitalizing Marine Ecosystems</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=800"
            alt="Biodome concept"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
            <p className="text-gray-600">
              Our Oxygenated Biodomes project addresses the critical issue of ocean deoxygenation.
              These innovative structures create protected environments where marine life can thrive
              while actively increasing oxygen levels in the surrounding water.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Droplet className="h-6 w-6 text-blue-600" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Oxygen Generation</h3>
                <p className="text-gray-600">
                  Advanced photosynthetic systems and specialized algae cultures work together to
                  produce oxygen and maintain optimal levels within the biodome.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Sun className="h-6 w-6 text-blue-600" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Solar Powered</h3>
                <p className="text-gray-600">
                  Sustainable energy collection through integrated solar panels powers the oxygen
                  generation and monitoring systems.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Wind className="h-6 w-6 text-blue-600" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Water Circulation</h3>
                <p className="text-gray-600">
                  Smart circulation system ensures even distribution of oxygen-rich water throughout
                  the biodome and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544552866-d3ed42536d45?auto=format&fit=crop&q=80&w=800"
            alt="Project testing"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Testing & Results</h2>
            <p className="text-gray-600">
              Our prototype testing has shown promising results with a 40% increase in local oxygen
              levels and improved marine life activity within the biodome environment. The system has
              demonstrated sustainable operation over extended periods.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1527100673774-cce25eafaf7f?auto=format&fit=crop&q=80&w=800"
            alt="Future impact"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Future Impact</h2>
            <p className="text-gray-600">
              The Oxygenated Biodomes project has the potential to revolutionize marine ecosystem
              preservation. We envision a network of biodomes supporting endangered marine species
              and helping to combat the effects of ocean deoxygenation on a global scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationPage;