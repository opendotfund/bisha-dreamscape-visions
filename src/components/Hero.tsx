
import { Play, Film, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center mb-8">
          <Film className="w-16 h-16 text-purple-400 mr-4" />
          <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            BISHA
          </h1>
        </div>
        
        <div className="text-2xl md:text-4xl font-light mb-6 text-gray-300">
          STUDIOS
        </div>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-4xl mx-auto leading-relaxed">
          The future of filmmaking is here. Using cutting-edge AI technology like 
          <span className="text-purple-400 font-semibold"> Veo3</span>, 
          <span className="text-blue-400 font-semibold"> Runway</span>, and emerging tech to create 
          <span className="text-pink-400 font-semibold"> full-length cinematic experiences</span> 
          that push the boundaries of storytelling.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
            <Play className="w-5 h-5 mr-2" />
            Watch Our Vision
          </Button>
          <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 text-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Explore Concepts
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
