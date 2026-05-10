import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { Theme, Review } from '../types';

interface ReviewCarouselProps {
  theme: Theme;
  reviews: Review[];
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ theme, reviews }) => {
  const [reviewSlide, setReviewSlide] = useState(0);

  const nextReview = () => setReviewSlide((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setReviewSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  const currentReview = reviews[reviewSlide];

  return (
    <div className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>What Our Customers Say</h2>

        <div className={`relative rounded-2xl p-8 sm:p-12 border shadow-2xl transition-all ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-slate-900 to-black border-slate-800' 
            : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-start gap-4 mb-6">
            <div className="flex gap-1">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{currentReview.name}</p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>{currentReview.service} • {currentReview.date}</p>
            </div>
          </div>

          <p className={`text-lg mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-200' : 'text-slate-600'}`}>"{currentReview.text}"</p>

          <div className="flex items-center justify-between">
            <button onClick={prevReview} className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-slate-100'}`}>
              <ChevronLeft size={24} className="text-amber-400" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setReviewSlide(i)}
                  className={`h-2 rounded-full transition-all ${i === reviewSlide ? 'bg-amber-400 w-8' : (theme === 'dark' ? 'bg-slate-600 w-2' : 'bg-slate-200 w-2')}`} 
                />
              ))}
            </div>

            <button onClick={nextReview} className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-slate-100'}`}>
              <ChevronRight size={24} className="text-amber-400" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a href="https://share.google/ymctgvIBvG8NjxtG0" target="_blank" rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center justify-center gap-2">
            <Star size={20} /> See More Reviews
          </a>
          <a href="https://share.google/ymctgvIBvG8NjxtG0" target="_blank" rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl bg-slate-800 text-white font-bold border border-slate-700 hover:border-amber-400 transition-all duration-300 flex items-center justify-center gap-2">
            <CheckCircle size={20} /> Write a Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
