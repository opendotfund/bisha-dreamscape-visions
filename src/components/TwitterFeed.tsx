import { useState, useEffect } from 'react';
import { Search, Send } from 'lucide-react';
import Tweet from './Tweet';
import { instant } from '../lib/instantdb';

// Sample AI and crypto related tweets for initial data
const sampleTweets = [
  {
    username: "AI_Enthusiast",
    content: "Just witnessed GPT-4 solving complex mathematical problems in real-time. The future of AI is here! 🤖✨ #AI #MachineLearning",
    metadata: {
      timestamp: "2h",
      date: new Date().toISOString(),
      likes: 245,
      retweets: 56,
      replies: 23
    }
  },
  {
    username: "CryptoWhale",
    content: "Bitcoin breaking through resistance levels. The institutional adoption is real! 📈 #BTC #Crypto",
    metadata: {
      timestamp: "4h",
      date: new Date().toISOString(),
      likes: 189,
      retweets: 42,
      replies: 15
    }
  },
  {
    username: "TechFuturist",
    content: "The intersection of AI and blockchain is creating unprecedented opportunities. Smart contracts + AI = 🤯 #Web3 #AI",
    metadata: {
      timestamp: "6h",
      date: new Date().toISOString(),
      likes: 312,
      retweets: 78,
      replies: 34
    }
  },
  {
    username: "DeFi_Expert",
    content: "New DeFi protocol launching with AI-powered yield optimization. This could be a game-changer! 🚀 #DeFi #AI",
    metadata: {
      timestamp: "8h",
      date: new Date().toISOString(),
      likes: 156,
      retweets: 45,
      replies: 28
    }
  }
];

const TwitterFeed = () => {
  const [tweets, setTweets] = useState<any[]>([]);
  const [newTweet, setNewTweet] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTweets, setFilteredTweets] = useState<any[]>([]);

  // Initialize database with sample tweets
  useEffect(() => {
    const initializeDB = async () => {
      try {
        // Check if we have any tweets in the database
        const existingTweets = await instant.query('tweets');
        if (existingTweets.length === 0) {
          // If no tweets exist, add sample tweets
          for (const tweet of sampleTweets) {
            await instant.create('tweets', tweet);
          }
        }
        // Fetch all tweets
        const allTweets = await instant.query('tweets');
        setTweets(allTweets);
        setFilteredTweets(allTweets);
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    };

    initializeDB();
  }, []);

  // Update filtered tweets when search query changes
  useEffect(() => {
    const filtered = tweets.filter(tweet => 
      tweet.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tweet.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTweets(filtered);
  }, [searchQuery, tweets]);

  const handlePostTweet = async () => {
    if (newTweet.trim()) {
      try {
        const tweet = {
          username: "Lovable_fan",
          content: newTweet,
          metadata: {
            timestamp: "now",
            date: new Date().toISOString(),
            likes: 0,
            retweets: 0,
            replies: 0
          }
        };

        // Create new tweet in database
        const newTweetRecord = await instant.create('tweets', tweet);
        
        // Update local state
        setTweets([newTweetRecord, ...tweets]);
        setNewTweet('');
      } catch (error) {
        console.error('Error posting tweet:', error);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
        <h1 className="text-2xl font-bold text-blue-500">Twitter Clone</h1>
      </div>

      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tweets or usernames..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Post Tweet */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
              L
            </div>
          </div>
          <div className="flex-1">
            <textarea
              placeholder="What's happening?"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
              rows={3}
              value={newTweet}
              onChange={(e) => setNewTweet(e.target.value)}
            />
            <div className="mt-2 flex justify-end">
              <button
                onClick={handlePostTweet}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 flex items-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tweet Feed */}
      <div>
        {filteredTweets.map((tweet, index) => (
          <Tweet
            key={tweet.id || index}
            username={tweet.username}
            content={tweet.content}
            timestamp={tweet.metadata.timestamp}
            likes={tweet.metadata.likes}
            retweets={tweet.metadata.retweets}
            replies={tweet.metadata.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default TwitterFeed; 