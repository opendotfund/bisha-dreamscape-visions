import { MessageCircle, Heart, Share2, Repeat2 } from 'lucide-react';

interface TweetProps {
  username: string;
  content: string;
  timestamp: string;
  likes?: number;
  retweets?: number;
  replies?: number;
}

const Tweet = ({ username, content, timestamp, likes = 0, retweets = 0, replies = 0 }: TweetProps) => {
  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
            {username[0].toUpperCase()}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-900">{username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{timestamp}</span>
          </div>
          <p className="mt-2 text-gray-900">{content}</p>
          <div className="mt-3 flex items-center space-x-8">
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>{replies}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-green-500">
              <Repeat2 className="w-5 h-5 mr-2" />
              <span>{retweets}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-red-500">
              <Heart className="w-5 h-5 mr-2" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet; 