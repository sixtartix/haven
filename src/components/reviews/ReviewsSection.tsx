import { ReviewsCarousel } from './ReviewsCarousel';

export function ReviewsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">
            1,000+ <span className="text-[#31D7F4]">avis 5 étoiles</span>
          </h2>
          <img 
            src="https://fr.eloking.com/img/icons/5-green-stars.svg" 
            alt="5 stars"
            className="h-6"
          />
        </div>
        <img
          src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg"
          alt="Trustpilot"
          className="h-6"
        />
      </div>

      <ReviewsCarousel />
    </div>
  );
}