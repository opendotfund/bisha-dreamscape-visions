
import { Brain, Video, Zap, Cpu } from 'lucide-react';

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Brain className="w-12 h-12" />,
      name: "Veo3",
      description: "Next-generation video synthesis for photorealistic scene generation and character animation."
    },
    {
      icon: <Video className="w-12 h-12" />,
      name: "Runway ML",
      description: "Advanced AI video editing and generation tools for seamless post-production workflows."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      name: "Neural Networks",
      description: "Custom-trained models for realistic facial animation, voice synthesis, and scene composition."
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      name: "Emerging Tech",
      description: "Cutting-edge AI tools for procedural world-building and immersive storytelling."
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
            Revolutionary Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We harness the power of artificial intelligence to create cinematic experiences 
            that were once impossible, bringing stories to life with unprecedented realism and scale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-black/50 p-8 rounded-xl border border-amber-700/30 hover:border-amber-500/70 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-amber-500 mb-4">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-amber-100">{tech.name}</h3>
              <p className="text-gray-400 leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
