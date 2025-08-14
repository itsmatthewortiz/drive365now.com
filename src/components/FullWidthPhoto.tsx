import React from 'react';

const FullWidthPhoto = () => {
  return (
    <section className="relative h-96 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Professional driving instruction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey to Independence Starts Here
          </h2>
          <p className="text-xl md:text-2xl text-gray-200">
            Professional, patient, and proven driving instruction methods
          </p>
        </div>
      </div>
    </section>
  );
};

export default FullWidthPhoto;