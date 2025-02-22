import React from 'react';
import { Award, Heart, Globe } from 'lucide-react';

const OutreachPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Community Outreach</h1>
        <p className="text-xl text-gray-600">Making a Difference in Our Community</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mentors</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                alt="Mentor"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Dr. Sarah Johnson</h3>
                <p className="text-gray-600">Marine Biology Expert</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
                alt="Mentor"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Prof. Michael Chen</h3>
                <p className="text-gray-600">Robotics Specialist</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ocean Impact</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Globe className="h-6 w-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Environmental Education</h3>
                <p className="text-gray-600">
                  Conducted workshops at local schools reaching over 500 students about ocean conservation
                  and the importance of marine ecosystems.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Heart className="h-6 w-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Community Engagement</h3>
                <p className="text-gray-600">
                  Organized beach cleanup events and raised awareness about marine pollution through
                  social media campaigns.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Award className="h-6 w-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Recognition</h3>
                <p className="text-gray-600">
                  Received the Community Impact Award for our dedication to ocean conservation and
                  environmental stewardship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Impact Journey</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Students Reached</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
            <p className="text-gray-600">Community Events</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
            <p className="text-gray-600">Environmental Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutreachPage;