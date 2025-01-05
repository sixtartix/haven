import { Star } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

interface ReviewCardProps {
  rating: number;
  text: string;
  author: {
    name: string;
    image: string;
    rank: string;
    country: string;
  };
}

export function ReviewCard({ rating, text, author }: ReviewCardProps) {
  return (
    <div className="h-full bg-[#0A0B14]/80 p-6 rounded-xl border border-[#1E2130] backdrop-blur-lg">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-[#31D7F4] fill-[#31D7F4]' : 'text-gray-400'
            }`}
          />
        ))}
      </div>
      <p className="text-white/90 mb-6 line-clamp-4">{text}</p>
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10 border-2 border-[#31D7F4]">
          <img src={author.image} alt={author.name} />
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">{author.name}</span>
            <span className="text-sm">{author.country}</span>
          </div>
          <span className="text-sm text-[#31D7F4]">{author.rank}</span>
        </div>
      </div>
    </div>
  );
}