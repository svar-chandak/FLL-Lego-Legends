import React from 'react';
import { Trophy, Target, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to Lego Legends</h1>
        <p className="text-xl text-gray-600">FLL Team #62754</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
            alt="Team working together"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-600">
              We are a passionate group of young innovators dedicated to solving real-world problems
              through robotics and creative thinking. Our team brings together diverse talents and
              perspectives to tackle challenges in the FIRST LEGO League competition.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Core Values</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from robot design to project presentation.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Innovation</h3>
                <p className="text-gray-600">
                  Thinking outside the box and developing creative solutions to complex problems.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Teamwork</h3>
                <p className="text-gray-600">
                  Working together, supporting each other, and celebrating our collective achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Achievements</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-lg text-blue-800">Robot Design Award</h3>
            <p className="text-gray-600">Regional Competition 2024</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-lg text-blue-800">Innovation Project</h3>
            <p className="text-gray-600">First Place - District Level</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-lg text-blue-800">Core Values</h3>
            <p className="text-gray-600">Excellence in Teamwork</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;