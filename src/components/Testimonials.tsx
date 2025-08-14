import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 18,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "I passed my test first time thanks to Drive365! The instructors are so patient and really know how to build your confidence. Highly recommend!",
      course: "Beginner Lessons"
    },
    {
      name: "Mike Chen",
      age: 25,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The intensive course was perfect for my busy schedule. Went from never driving to passing my test in just 2 weeks. Amazing service!",
      course: "Intensive Course"
    },
    {
      name: "Emma Williams",
      age: 22,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "After failing my test twice with another school, Drive365 helped me pass on my first attempt with them. The test preparation was excellent!",
      course: "Test Preparation"
    },
    {
      name: "David Brown",
      age: 35,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Hadn't driven in 10 years and was nervous about getting back on the road. The refresher course gave me all the confidence I needed.",
      course: "Refresher Course"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students 
            have to say about their experience with Drive365.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}, {testimonial.age}
                  </div>
                  <div className="text-sm text-blue-600">
                    {testimonial.course}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;