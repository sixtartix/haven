import { ReviewCard } from './ReviewCard';

const reviews = [
  {
    rating: 5,
    text: "Boosting service was top-notch, quick response times and great results. Very satisfied!",
    author: {
      name: "Brian",
      image: "https://i.pravatar.cc/150?img=1",
      country: "🇩🇪"
    }
  },
  {
    rating: 5,
    text: "Affordable and effective boosting. The booster was friendly and efficient. Great job!",
    author: {
      name: "Liam",
      image: "https://i.pravatar.cc/150?img=2",
      country: "🇦🇹"
    }
  },
  {
    rating: 5,
    text: "Fantastic service with quick turnaround. The booster was very helpful and skilled. Will recommend!",
    author: {
      name: "Nikolai",
      image: "https://i.pravatar.cc/150?img=3",
      country: "🇳🇱"
    }
  },
  {
    rating: 5,
    text: "Great boosting service, fast and reliable. The program is a nice recommend!",
    author: {
      name: "Klaus",
      image: "https://i.pravatar.cc/150?img=4",
      country: "🇩🇪"
    }
  }
];

export function ReviewsSection() {
  return (
    <div className="mt-16 mb-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
}