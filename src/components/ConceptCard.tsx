
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface ConceptCardProps {
  concept: {
    title: string;
    subtitle: string;
    description: string;
    genre: string;
    budget: string;
    imageUrl: string;
    highlights: string[];
  };
  index: number;
}

const ConceptCard = ({ concept, index }: ConceptCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <Card className="bg-black/60 border-purple-500/20 overflow-hidden hover:border-purple-500/50 transition-all duration-500">
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
        <div className="lg:w-1/2 p-8 lg:p-12">
          <div className="mb-4">
            <h3 className="text-4xl font-bold text-white mb-2">{concept.title}</h3>
            <p className="text-xl text-purple-400 font-medium">{concept.subtitle}</p>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {concept.description}
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-blue-400 text-blue-400">
                {concept.genre}
              </Badge>
              <Badge variant="outline" className="border-green-400 text-green-400">
                {concept.budget}
              </Badge>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Key Elements:</h4>
            <div className="grid grid-cols-2 gap-2">
              {concept.highlights.map((highlight, idx) => (
                <div key={idx} className="text-sm text-gray-400 flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative overflow-hidden">
          <div className="aspect-video lg:aspect-square">
            <img 
              src={concept.imageUrl} 
              alt={concept.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ConceptCard;
