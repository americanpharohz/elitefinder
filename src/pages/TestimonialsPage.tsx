import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marcus Chen',
      location: 'Singapore',
      category: 'Luxury Yachts',
      rating: 5,
      testimonial: 'Elite Finder Services found me the perfect superyacht that had been off-market for years. Their discretion and professionalism throughout the $12M acquisition was exceptional. The 2% commission was worth every penny for accessing their exclusive network.',
      project: 'Benetti 65M Custom Superyacht',
      year: '2024'
    },
    {
      id: 2,
      name: 'Isabella Rodriguez',
      location: 'Madrid, Spain',
      category: 'Fine Jewelry',
      rating: 5,
      testimonial: 'I thought finding a genuine Art Deco Cartier tiara from the 1920s was impossible. Elite Finder not only located one but negotiated directly with a private European collector. The authentication process was thorough and the final price was 15% below my maximum budget.',
      project: 'Cartier Art Deco Diamond Tiara',
      year: '2023'
    },
    {
      id: 3,
      name: 'James Wellington III',
      location: 'New York, USA',
      category: 'Rare Collectibles',
      rating: 5,
      testimonial: 'As a serious Pokémon card collector, I needed the 1996 Base Set Shadowless Charizard in PSA 10 condition. Elite Finder\'s connections in Japan secured one from a private collection that was never publicly available. Their expertise in grading and authentication is unmatched.',
      project: '1996 Charizard PSA 10',
      year: '2024'
    },
    {
      id: 4,
      name: 'Sheikh Ahmed Al-Rashid',
      location: 'Dubai, UAE',
      category: 'Hypercars',
      rating: 5,
      testimonial: 'Finding a McLaren F1 GTR Longtail in original racing livery seemed impossible until I contacted Elite Finder. They traced the car\'s history through three continents and negotiated with the owner for over six months. The $85,000 commission was justified by the result.',
      project: 'McLaren F1 GTR Longtail',
      year: '2023'
    },
    {
      id: 5,
      name: 'Victoria Pemberton',
      location: 'London, UK',
      category: 'Luxury Watches',
      rating: 5,
      testimonial: 'My late husband collected Patek Philippe watches, and I wanted to complete his collection with a specific 1958 reference. Elite Finder spent four months tracking down the exact piece through auction houses and private collectors. The emotional value was priceless.',
      project: 'Patek Philippe Ref. 2526 1958',
      year: '2024'
    },
    {
      id: 6,
      name: 'Robert Kim',
      location: 'Seoul, South Korea',
      category: 'Real Estate',
      rating: 5,
      testimonial: 'Acquiring off-market real estate in Aspen\'s exclusive Red Mountain area required connections I didn\'t have. Elite Finder\'s network included the seller\'s family attorney, and they structured a private deal that never hit the public market. Exceptional service from start to finish.',
      project: 'Aspen Red Mountain Estate',
      year: '2023'
    },
    {
      id: 7,
      name: 'Dr. Elena Popovich',
      location: 'Moscow, Russia',
      category: 'Fine Art',
      rating: 5,
      testimonial: 'Locating a specific Monet water lily painting that had been in private hands for 60 years required extraordinary connections. Elite Finder\'s art world network made the impossible possible. The provenance research and authentication were museum-quality.',
      project: 'Monet Water Lilies Series',
      year: '2024'
    },
    {
      id: 8,
      name: 'Carlos Mendoza',
      location: 'Mexico City, Mexico',
      category: 'Vintage Automobiles',
      rating: 5,
      testimonial: 'I searched for a 1955 Ferrari 250 GT Tour de France for over a decade. Elite Finder found one in a private Swiss collection and handled every aspect of the international transaction. Their expertise in classic car valuations saved me from overpaying by at least $200,000.',
      project: '1955 Ferrari 250 GT TdF',
      year: '2023'
    },
    {
      id: 9,
      name: 'Princess Amara Al-Saud',
      location: 'Riyadh, Saudi Arabia',
      category: 'Rare Gemstones',
      rating: 5,
      testimonial: 'Finding a 15-carat Kashmir sapphire with no heat treatment and perfect clarity required Elite Finder\'s specialized knowledge of the colored stone market. They connected me directly with a Genevan dealer who had held the stone for a royal family for 30 years.',
      project: '15ct Kashmir Sapphire Ring',
      year: '2024'
    },
    {
      id: 10,
      name: 'Michael Thompson',
      location: 'Toronto, Canada',
      category: 'Sports Memorabilia',
      rating: 5,
      testimonial: 'As a hockey fanatic, owning Wayne Gretzky\'s 1979 WHA Edmonton Oilers game-worn jersey was a lifelong dream. Elite Finder traced its ownership history through multiple collectors and negotiated a private sale. The authentication process was incredibly thorough.',
      project: 'Gretzky 1979 Game-Worn Jersey',
      year: '2023'
    },
    {
      id: 11,
      name: 'Hiroshi Nakamura',
      location: 'Tokyo, Japan',
      category: 'Vintage Watches',
      rating: 5,
      testimonial: 'Finding a Seiko 6159-7001 "Captain Willard" from 1970 in unworn condition required access to collectors who never sell publicly. Elite Finder\'s reputation in the watch community opened doors that had been closed for decades. Truly exceptional service.',
      project: 'Seiko Captain Willard 1970',
      year: '2024'
    },
    {
      id: 12,
      name: 'Lady Catherine Ashworth',
      location: 'Edinburgh, Scotland',
      category: 'Antique Furniture',
      rating: 5,
      testimonial: 'Restoring our family castle required period-correct 18th-century furniture pieces. Elite Finder located original Chippendale pieces from estate sales and private collections across Europe. Their knowledge of provenance and authenticity was invaluable for insurance purposes.',
      project: 'Chippendale Dining Set (1760)',
      year: '2023'
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="h-4 w-4 text-gold-500 fill-current" />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold font-serif mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-300 mb-8">
              Hear from our exclusive clientele who have experienced the Elite Finder difference. 
              Each testimonial represents a successful acquisition and a satisfied collector.
            </p>
            <div className="grid grid-cols-3 gap-6 bg-navy-800/50 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400">4.98/5</div>
                <div className="text-sm text-gray-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400">100%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400">2,500+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-gold-500 mr-3" />
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gold-600 font-medium bg-gold-50 px-2 py-1 rounded">
                        {testimonial.category}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    <div className="font-medium">{testimonial.project}</div>
                    <div>{testimonial.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-navy-900 mb-4">Why Clients Choose Us</h2>
            <p className="text-xl text-gray-600">The pillars of our service excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Exclusive Access</h3>
              <p className="text-gray-600">Private collections and off-market opportunities not available to the public</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Complete Discretion</h3>
              <p className="text-gray-600">Confidential transactions with the highest level of privacy protection</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Expert Negotiation</h3>
              <p className="text-gray-600">Professional representation ensuring the best terms and authentic acquisitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">Join Our Satisfied Clientele</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the Elite Finder difference and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-700 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;