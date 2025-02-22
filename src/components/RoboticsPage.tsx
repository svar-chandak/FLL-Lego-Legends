import React from 'react';
import { Target, Wrench, Cpu } from 'lucide-react';

const RoboticsPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Robot Game</h1>
        <p className="text-xl text-gray-600">Strategy and Innovation in Action</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
            alt="Robot in action"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Robot</h2>
            <p className="text-gray-600">
              Meet ATLAS-1, our custom-designed LEGO MINDSTORMS robot. Built for precision and
              reliability, it features innovative attachments and programming solutions to tackle
              this year's challenging missions.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Technical Specifications</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Cpu className="h-6 w-6 text-blue-600" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Core Components</h3>
                <p className="text-gray-600">
                  - LEGO MINDSTORMS EV3 Intelligent Brick<br />
                  - 4 High-precision motors<br />
                  - Multiple sensors for autonomous navigation<br />
                  - Custom-designed attachments
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Wrench className="h-6 w-6 text-blue-600" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Design Features</h3>
                <p className="text-gray-600">
                  - Quick-swap attachment system<br />
                  - Compact base design for maneuverability<br />
                  - Reinforced structure for stability<br />
                  - Optimized weight distribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&q=80&w=1200"
          alt="Game board overview"
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Game Strategy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center">
                <Target className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Round 1</h3>
              </div>
              <p className="text-gray-600">
                Focus on high-scoring missions in the north quadrant, utilizing our precision arm
                attachment for maximum efficiency.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Target className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Round 2</h3>
              </div>
              <p className="text-gray-600">
                Target the collection missions in the center, maximizing points through strategic
                path planning and minimal robot adjustments.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Target className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Round 3</h3>
              </div>
              <p className="text-gray-600">
                Execute complex combination missions in the south quadrant, leveraging our
                multi-function attachment for consecutive tasks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Competition Performance</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">385</div>
            <p className="text-gray-600">Highest Score</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-gray-600">Mission Success Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
            <p className="text-gray-600">Missions Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsPage;