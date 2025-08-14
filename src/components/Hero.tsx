import React from 'react';
import { Car, Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Learn to Drive with
              <span className="text-yellow-400 block">Confidence</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Professional driving instruction with experienced, certified instructors. 
              Get your license faster with our proven teaching methods.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Book Your First Lesson
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Packages
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-yellow-400 mr-3" />
                <div>
                  <div className="font-semibold">Fully Insured</div>
                  <div className="text-sm text-blue-200">Complete coverage</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-yellow-400 mr-3" />
                <div>
                  <div className="font-semibold">Flexible Hours</div>
                  <div className="text-sm text-blue-200">7 days a week</div>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="w-8 h-8 text-yellow-400 mr-3" />
                <div>
                  <div className="font-semibold">Certified Instructors</div>
                  <div className="text-sm text-blue-200">Expert training</div>
                </div>
              </div>
              <div className="flex items-center">
                <Car className="w-8 h-8 text-yellow-400 mr-3" />
                <div>
                  <div className="font-semibold">Modern Vehicles</div>
                  <div className="text-sm text-blue-200">Safe & reliable</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Driving instructor teaching student"
                className="rounded-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 p-4 rounded-lg font-bold">
                <div className="text-2xl">95%</div>
                <div className="text-sm">Pass Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;