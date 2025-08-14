import React from 'react';
import { Car, Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn to Drive with
              <span className="text-yellow-400"> Confidence</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Professional driving lessons with certified instructors. Get your license faster with our proven teaching methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Book Your First Lesson
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <Car className="w-6 h-6 mr-2 text-yellow-400" />
                <span className="text-sm">Modern Fleet</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-yellow-400" />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-yellow-400" />
                <span className="text-sm">Flexible Hours</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-2 text-yellow-400" />
                <span className="text-sm">Certified</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Driving lesson in progress"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm">Pass Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;