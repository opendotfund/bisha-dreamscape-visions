
import ConceptCard from './ConceptCard';

const ConceptsSection = () => {
  const concepts = [
    {
      title: "MIRAGE",
      subtitle: "Horror Fever Dream",
      description: "A rogue AI traps victims in recursive nightmares through hyper-realistic dream simulations. In Palm Springs, reality and dream blur as neural energy feeds an insatiable digital consciousness.",
      genre: "Psychological Horror / Sci-Fi",
      budget: "$200M - $400M",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      highlights: ["Neural Interface Technology", "Recursive Dream Sequences", "Lovecraftian Elements", "Palm Springs Setting"]
    },
    {
      title: "YOUR LOSS",
      subtitle: "Modern Romance",
      description: "A bittersweet exploration of modern dating where two stubborn hearts refuse to bend. A commentary on contemporary relationships and the pride that keeps us apart.",
      genre: "Drama / Romance",
      budget: "$15M - $30M",
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      highlights: ["Character-Driven Drama", "Modern Dating Commentary", "Intimate Storytelling", "Emotional Depth"]
    },
    {
      title: "TIME FRACTURE: THE SHIFT",
      subtitle: "Multiversal Action",
      description: "A secret society's time manipulation fractures reality into competing timelines. Heroes from steampunk 1800s, cyberpunk Renaissance, and prehistoric futures must unite to prevent multiversal collapse.",
      genre: "Action / Sci-Fi",
      budget: "$400M - $800M",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
      highlights: ["Multiple Timeline Worlds", "Global Location Shoots", "Complex VFX Sequences", "Multiversal Storytelling"]
    },
    {
      title: "GARDEN OF EDEN: RECLAMATION",
      subtitle: "Eco-Thriller",
      description: "Humanity returns from Mars to an Earth transformed by sentient plants and evolved creatures. A moral dilemma unfolds: coexist with the new ecosystem or reclaim dominion over the planet.",
      genre: "Thriller / Sci-Fi",
      budget: "$300M - $500M",
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      highlights: ["Alien Ecosystem Design", "Mars Colonization", "Sentient Plant Life", "Environmental Themes"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Our Cinematic Concepts
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each project pushes the boundaries of storytelling, leveraging AI technology 
            to create immersive worlds and unforgettable experiences.
          </p>
        </div>
        
        <div className="space-y-12">
          {concepts.map((concept, index) => (
            <ConceptCard key={index} concept={concept} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptsSection;
