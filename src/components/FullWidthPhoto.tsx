import React from 'react';

const FullWidthPhoto = () => {
  return (
    <section className="relative h-96 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Professional driving instructor with student"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Journey Starts Here
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
            Join thousands of successful drivers who learned with Drive365
          </p>
        </div>
      </div>
    </section>
  );
};

export default FullWidthPhoto;