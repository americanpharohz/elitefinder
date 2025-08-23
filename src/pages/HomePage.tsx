import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Globe, Award, TrendingUp, Shield } from 'lucide-react';

const HomePage = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+', icon: Award },
    { label: 'Successful Acquisitions', value: '2,500+', icon: TrendingUp },
    { label: 'Global Network Partners', value: '500+', icon: Globe },
    { label: 'Client Satisfaction Rate', value: '98%', icon: Star },
  ];

  const services = [
    {
      title: 'Rare Collectibles',
      description: 'Vintage Pokémon cards, limited art pieces, and exclusive memorabilia',
<<<<<<< HEAD
      image: 'https://www.wargamer.com/wp-content/sites/wargamer/2025/06/rare-pokemon-cards-disco-holo-charizard-test-550x309.jpg',
=======
      image: 'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg',
>>>>>>> 8f5f6e2e487595727e7681a73c760d85e6533647
    },
    {
      title: 'Luxury Vehicles',
      description: 'Hypercars, vintage classics, and limited production supercars',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    },
    {
      title: 'Exclusive Yachts',
      description: 'Custom superyachts and rare maritime vessels',
<<<<<<< HEAD
      image: 'https://robbreport.com/wp-content/uploads/2022/07/StellaDelSud4.jpg?w=1000',
=======
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
>>>>>>> 8f5f6e2e487595727e7681a73c760d85e6533647
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
                Your Gateway to the
                <span className="text-gold-400"> Impossible</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Elite Finder Services specializes in acquiring the world's most exclusive and rare luxury items. 
                From vintage Pokémon cards to superyachts, we turn your dreams into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Your Search
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="animate-slide-in">
              <img
<<<<<<< HEAD
                src="https://ucarecdn.com/558c76fb-2ba0-41c8-a5ca-b6092dca8ad8/"
=======
                src="https://images.pexels.com/photos/1034582/pexels-photo-1034582.jpeg"
>>>>>>> 8f5f6e2e487595727e7681a73c760d85e6533647
                alt="Luxury items collection"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4 group-hover:bg-gold-200 transition-colors">
                    <Icon className="h-8 w-8 text-gold-600" />
                  </div>
                  <div className="text-3xl font-bold text-navy-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-navy-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From rare collectibles to exclusive real estate, we have the connections and expertise 
              to source the world's most coveted luxury items.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-gold-600 font-semibold hover:text-gold-700 transition-colors inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Why Elite Collectors Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-600 rounded-full mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Discretion Guaranteed</h3>
              <p className="text-gray-300">Complete confidentiality and secure transactions for all acquisitions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-600 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-gray-300">Exclusive access to private collectors and dealers worldwide</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-600 rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Authentication</h3>
              <p className="text-gray-300">Rigorous verification process ensuring authenticity and provenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-600 to-gold-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">Ready to Find the Unfindable?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our exclusive clientele and let us turn your luxury aspirations into reality.
          </p>
          <Link
            to="/contact"
            className="bg-navy-900 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-navy-800 transition-colors duration-300 inline-flex items-center group"
          >
            Begin Your Journey
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;