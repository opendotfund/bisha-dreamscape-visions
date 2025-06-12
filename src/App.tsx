import { useState, useEffect } from 'react';
import TwitterFeed from './components/TwitterFeed';
import { InstantProvider, useInstant } from '@instantdb/react';
import { instant } from './lib/instantdb';

function AppContent() {
  const { user, signIn } = useInstant();
  const [email, setEmail] = useState('lovable_fan@example.com');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await signIn({ email });
      } catch (error) {
        console.error('Auth error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, [email, signIn]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Sign in to Twitter Clone</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter your email"
          />
          <button
            onClick={() => signIn({ email })}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign in with Magic Link
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <TwitterFeed />
    </div>
  );
}

function App() {
  return (
    <InstantProvider instant={instant}>
      <AppContent />
    </InstantProvider>
  );
}

export default App;
