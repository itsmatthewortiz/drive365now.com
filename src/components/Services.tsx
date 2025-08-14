import React from 'react';
import { Car, Users, Clock, Award, Shield, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Beginner Lessons",
      description: "Perfect for first-time drivers. Learn the basics with patient, experienced instructors.",
      price: "From $45/hour",
      features: ["Basic vehicle controls", "Traffic rules", "Parking techniques", "Road safety"]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Intensive Courses",
      description: "Fast-track your learning with our comprehensive intensive driving courses.",
      price: "From $299/week",
      features: ["Daily lessons", "Theory test prep", "Mock driving tests", "Fast results"]
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Test Preparation",
      description: "Get ready for your driving test with our specialized preparation sessions.",
      price: "From $55/hour",
      features: ["Test routes practice", "Maneuver training", "Confidence building", "Last-minute tips"]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Refresher Courses",
      description: "Brush up on your driving skills with our refresher courses for experienced drivers.",
      price: "From $50/hour",
      features: ["Skill assessment", "Confidence restoration", "New rule updates", "Flexible scheduling"]
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Pass Plus",
      description: "Advanced driving course to improve your skills and potentially reduce insurance costs.",
      price: "From $199/course",
      features: ["Motorway driving", "Night driving", "Weather conditions", "Insurance discounts"]
    },
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: "Area Coverage",
      description: "We cover a wide area with flexible pickup and drop-off locations.",
      price: "No extra charge",
      features: ["Home pickup", "School pickup", "Work pickup", "Flexible locations"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of professional driving instruction services, 
            tailored to meet your specific needs and learning pace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="text-2xl font-bold text-blue-600 mb-6">{service.price}</div>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
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