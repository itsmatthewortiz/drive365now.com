import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "2000+", label: "Students Taught" },
    { icon: <Award className="w-8 h-8" />, number: "95%", label: "Pass Rate" },
    { icon: <Clock className="w-8 h-8" />, number: "10+", label: "Years Experience" },
    { icon: <Shield className="w-8 h-8" />, number: "100%", label: "Fully Insured" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Drive365
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over a decade of experience in driver education, Drive365 has been 
              helping students across the region gain confidence behind the wheel and 
              pass their driving tests with flying colors.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified instructors uses modern teaching methods and 
              maintains the highest safety standards. We believe that learning to 
              drive should be an enjoyable and stress-free experience.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="flex justify-center text-blue-600 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Driving instructor with student"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 p-6 rounded-lg">
              <div className="text-2xl font-bold">Certified</div>
              <div className="text-sm">Instructors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;