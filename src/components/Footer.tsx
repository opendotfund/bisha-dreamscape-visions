import { Film, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Film className="w-8 h-8 text-purple-400 mr-3" />
              <span className="text-2xl font-bold neon-text">BISHA STUDIOS</span>
            </div>
            <p className="text-gray-400 mb-6">
              Creating the future of cinema through artificial intelligence and innovative storytelling.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                Los Angeles, California
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                contact@bishastudios.com
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                +1 (555) 123-4567
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Our Concepts</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Mirage</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Your Loss</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Time Fracture: The Shift</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Garden of Eden: Reclamation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Technology</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Veo3 Integration</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Runway ML</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Neural Networks</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Emerging AI Tech</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 <span className="neon-text">BISHA</span> STUDIOS. All rights reserved. The future of filmmaking starts here.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
