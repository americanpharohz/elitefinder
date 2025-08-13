import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Shield, Users } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Rare Pokémon Cards',
      description: 'Vintage cards, tournament prizes, and limited editions from the world\'s most exclusive collections.',
      image: 'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg',
      features: ['1st Edition Base Set', 'Japanese Tournament Promos', 'Artist Proof Cards', 'Error Cards'],
      commission: '1-2%',
    },
    {
      title: 'Hypercars & Supercars',
      description: 'Limited production vehicles from Ferrari, McLaren, Bugatti, and other prestigious manufacturers.',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      features: ['LaFerrari', 'McLaren P1', 'Bugatti Chiron', 'Koenigsegg Regera'],
      commission: '2-3%',
    },
    {
      title: 'Luxury Yachts',
      description: 'Custom superyachts, vintage vessels, and exclusive maritime properties.',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
      features: ['Custom Superyachts', 'Historic Vessels', 'Racing Yachts', 'Expedition Yachts'],
      commission: '1-2%',
    },
    {
      title: 'Rare Diamonds',
      description: 'Investment-grade diamonds, colored stones, and historically significant pieces.',
      image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg',
      features: ['Pink Diamonds', 'Blue Diamonds', 'Historic Pieces', 'Investment Gems'],
      commission: '2-3%',
    },
    {
      title: 'High-End Watches',
      description: 'Vintage timepieces, limited editions, and exclusive complications from top manufacturers.',
      image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      features: ['Patek Philippe', 'Rolex Daytona', 'Audemars Piguet', 'Vintage Complications'],
      commission: '1-3%',
    },
    {
      title: 'Off-Market Real Estate',
      description: 'Exclusive properties, historic estates, and luxury developments not available publicly.',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
      features: ['Private Islands', 'Historic Mansions', 'Luxury Penthouses', 'Investment Properties'],
      commission: '1-2%',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your requirements, budget, and timeline in complete confidentiality.',
      icon: Users,
    },
    {
      step: '02',
      title: 'Market Research',
      description: 'Our global network begins sourcing potential matches for your specifications.',
      icon: Star,
    },
    {
      step: '03',
      title: 'Authentication & Negotiation',
      description: 'We verify authenticity and negotiate the best terms on your behalf.',
      icon: Shield,
    },
    {
      step: '04',
      title: 'Secure Acquisition',
      description: 'Complete the transaction with full documentation and secure delivery.',
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold font-serif mb-6">Our Expertise</h1>
            <p className="text-xl text-gray-300 mb-8">
              With over 15 years of experience in luxury acquisition, we specialize in sourcing 
              the world's most exclusive and rare items across six premium categories.
            </p>
            <div className="bg-gold-600/20 border border-gold-400 rounded-lg p-6 inline-block">
              <p className="text-lg font-medium text-gold-400">
                Commission Structure: <span className="text-white">1-3% finder's fee based on rarity and negotiation complexity</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-navy-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.commission} Commission
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-900 mb-3">Specializations:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="h-4 w-4 text-gold-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="text-gold-600 font-semibold hover:text-gold-700 transition-colors inline-flex items-center"
                  >
                    Request Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-navy-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach that ensures successful acquisition while maintaining 
              complete discretion and professional standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gold-200 z-0"></div>
                  )}
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-900 text-white rounded-full mb-4 relative">
                      <Icon className="h-8 w-8" />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">Ready to Begin Your Search?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a confidential consultation about your luxury acquisition needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-700 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;