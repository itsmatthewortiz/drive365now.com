import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 18,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "I passed my test first time thanks to Drive365! The instructors are patient and really know how to build your confidence. Highly recommended!",
      rating: 5,
      course: "Standard Lessons"
    },
    {
      name: "Mike Chen",
      age: 25,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "The intensive course was perfect for me. I went from never driving to passing my test in just two weeks. Amazing instructors and great value.",
      rating: 5,
      course: "Intensive Course"
    },
    {
      name: "Emma Williams",
      age: 22,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "After failing my test twice with another school, Drive365 helped me identify my weak points and pass on the third attempt. Thank you!",
      rating: 5,
      course: "Test Preparation"
    },
    {
      name: "David Brown",
      age: 35,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "I hadn't driven in 10 years and needed refresher lessons. The instructor was understanding and helped me regain my confidence quickly.",
      rating: 5,
      course: "Refresher Lessons"
    },
    {
      name: "Lisa Taylor",
      age: 19,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "Professional, punctual, and patient. The online theory support was also really helpful. Passed both theory and practical first time!",
      rating: 5,
      course: "Standard Lessons"
    },
    {
      name: "James Wilson",
      age: 28,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "The Pass Plus course was excellent. Not only did I become a better driver, but I also got a discount on my insurance. Win-win!",
      rating: 5,
      course: "Pass Plus"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say about their experience with Drive365.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">Age {testimonial.age} • {testimonial.course}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-6">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
            <span className="font-semibold">4.9/5 Average Rating</span>
            <span className="ml-2 text-blue-200">• 500+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;