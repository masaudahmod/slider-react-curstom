import { useState } from "react";

const Slider = () => {
  const slides = [
    "https://images.unsplash.com/photo-1533832100063-f52ef5c25992?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHNlYXJjaHw4fHxzaGFwZXxlbnwwfHx8fDE3MzIwNDYzNTF8MA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1486551937199-baf066858de7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHNlYXJjaHw2fHxzaGFwZXxlbnwwfHx8fDE3MzIwNDYzNTF8MA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1524191185348-ade767aeaa14?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHNlYXJjaHwxfHxzaGFwZXxlbnwwfHx8fDE3MzIwNDYzNTF8MA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1500087251989-baf5d11698c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHNlYXJjaHwyfHxzaGFwZXxlbnwwfHx8fDE3MzIwNDYzNTF8MA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1556740772-1a741367b93e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHNlYXJjaHwyfHxzcXVhcmV8ZW58MHx8fHwxNzMyMDQ2NDA5fDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1489923899759-b080a4966bba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHNlYXJjaHwzfHxzcXVhcmV8ZW58MHx8fHwxNzMyMDQ2NDA5fDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1556745763-1a6f0ddb0250?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHNlYXJjaHw1fHxzcXVhcmV8ZW58MHx8fHwxNzMyMDQ2NDA5fDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1610177498573-78deaa4a797b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHNlYXJjaHw4fHxzcXVhcmV8ZW58MHx8fHwxNzMyMDQ2NDA5fDA&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1556741568-055d848f8bfd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NjMyNTh8MHwxfHNlYXJjaHwxMHx8c3F1YXJlfGVufDB8fHx8MTczMjA0NjQwOXww&ixlib=rb-4.0.3&q=85",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg bg-goldenrod bg-slate-200">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
      >
        {slides.map((src, index) => (
          <div className="w-1/2 h-full my-2 flex-shrink-0" key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-violet-500 text-white rounded-full shadow hover:bg-green-500 transition"
        >
          Left
        </button>
      )}

      {currentIndex < slides.length - 2 && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-violet-500 text-white rounded-full shadow hover:bg-green-500 transition"
        >
          Right
        </button>
      )}
    </div>
  );
};

export default Slider;
