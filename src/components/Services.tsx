import React from 'react';
import { Car, Users, Clock, MapPin, Shield, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Standard Lessons",
      description: "One-on-one driving lessons with certified instructors in modern, dual-control vehicles.",
      price: "From $45/hour",
      features: ["Dual-control vehicle", "Certified instructor", "Flexible scheduling", "Progress tracking"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Intensive Courses",
      description: "Fast-track your learning with our intensive driving courses designed to get you road-ready quickly.",
      price: "From $350/week",
      features: ["5-day intensive", "Theory test prep", "Mock driving test", "Fast-track booking"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Refresher Lessons",
      description: "Perfect for drivers who need to brush up on their skills or build confidence behind the wheel.",
      price: "From $40/hour",
      features: ["Confidence building", "Skill assessment", "Personalized plan", "Flexible duration"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Test Preparation",
      description: "Comprehensive preparation for your driving test with mock tests and expert guidance.",
      price: "From $55/hour",
      features: ["Mock driving tests", "Test route practice", "Examiner tips", "Stress management"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Defensive Driving",
      description: "Advanced techniques to help you become a safer, more confident driver on the road.",
      price: "From $50/hour",
      features: ["Hazard perception", "Emergency techniques", "Weather driving", "Night driving"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Pass Plus",
      description: "Post-test training to improve your skills and potentially reduce insurance costs.",
      price: "From $200/course",
      features: ["Insurance discounts", "Advanced skills", "Motorway training", "Certificate included"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Driving Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of driving lessons and courses, all designed to help you become a confident and safe driver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-4">
                {service.price}
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;