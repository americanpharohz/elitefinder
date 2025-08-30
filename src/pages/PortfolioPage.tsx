import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, DollarSign, Clock, Award } from 'lucide-react';

const PortfolioPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: '1998 Pikachu Illustrator Promo Card',
      category: 'Rare Collectibles',
      description: 'Ultra-rare Japanese promotional card with PSA Grade 10 certification.',
      client: 'Private Collector, Tokyo',
      testimonial: 'Elite Finder delivered what I thought was impossible. The authentication process was flawless.',
      commission: '$50,000',
      timeframe: '3 weeks',
      rarity: 'Only 39 known to exist',
      image: 'https://i.etsystatic.com/39266313/r/il/0c10a3/5274156626/il_570xN.5274156626_a7n7.jpg',
      year: '2023',
    },
    {
      id: 2,
      title: 'McLaren F1 LM',
      category: 'Hypercars',
      description: 'One of only 5 road-legal McLaren F1 LM variants ever produced.',
      client: 'Automotive Collector, Monaco',
      testimonial: 'The negotiation skills and market knowledge were exceptional. Worth every penny of the commission.',
      commission: '$85,000',
      timeframe: '6 months',
      rarity: 'Only 5 ever made',
      image: 'https://hips.hearstapps.com/roadandtrack/assets/16/34/1472141190-f1lm-front.jpg',
      year: '2023',
    },
    {
      id: 3,
      title: 'Amels 180 Custom Superyacht',
      category: 'Luxury Yachts',
      description: 'Custom-built 180ft superyacht with helicopter pad and submarine garage.',
      client: 'Tech Entrepreneur, Singapore',
      testimonial: 'Found my dream yacht through their exclusive network. The entire process was seamless.',
      commission: '$1,120,000',
      timeframe: '4 months',
      rarity: 'Custom one-off design',
      image: 'https://yachtharbour.com/static/uploads/4087_3a61b.jpeg',
      year: '2024',
    },
    {
      id: 4,
      title: '5.01ct Fancy Vivid Blue Diamond',
      category: 'Fine Jewelry',
      description: 'Exceptional fancy vivid blue diamond with flawless clarity and ideal cut.',
      client: 'Investment Fund, Switzerland',
      testimonial: 'Their expertise in colored diamonds is unmatched. An investment that exceeded expectations.',
      commission: '$200,000',
      timeframe: '8 weeks',
      rarity: 'Less than 0.02% of all diamonds',
      image: 'https://cdn.rainbowsapphire.com/wp-content/uploads/2023/06/DA262_1-1.jpg',
      year: '2024',
    },
    {
      id: 5,
      title: 'Patek Philippe 5016A Steel',
      category: 'Luxury Watches',
      description: 'The only known stainless steel 5016A with minute repeater, sold for charity.',
      client: 'Watch Collector, New York',
      testimonial: 'They secured a watch I never dreamed of owning. Their auction house connections are incredible.',
      commission: '$45,000',
      timeframe: '10 weeks',
      rarity: 'Unique piece',
      image: 'https://hodinkee.imgix.net/uploads/article/hero_image/2494/new_hero_2.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12',
      year: '2023',
    },
    {
      id: 6,
      title: 'Château Margaux Vineyard Estate',
      category: 'Real Estate',
      description: 'Historic vineyard estate in Bordeaux with 200-year wine-making heritage.',
      client: 'Luxury Hospitality Group, UAE',
      testimonial: 'Access to off-market properties that would never be available publicly. Exceptional service.',
      commission: '$150,000',
      timeframe: '7 months',
      rarity: 'Historic classification',
      image: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2012/10/000002a78-margaux.jpg',
      year: '2024',
    },
    {
      id: 7,
      title: '1952 Topps Mickey Mantle PSA 9',
      category: 'Sports Collectibles',
      description: 'Near-mint condition rookie card of baseball legend Mickey Mantle.',
      client: 'Sports Memorabilia Investor, Texas',
      testimonial: 'Found the exact grade and condition I needed for my collection. Truly professional service.',
      commission: '$35,000',
      timeframe: '5 weeks',
      rarity: 'Only 6 known PSA 9 examples',
      image: 'https://www.milehighcardco.com/ItemImages/000006/4_52t311mantle5_lg.jpeg',
      year: '2023',
    },
    {
      id: 8,
      title: 'Koenigsegg Regera Ghost Package',
      category: 'Hypercars',
      description: 'Limited edition Regera with exclusive Ghost aerodynamics package.',
      client: 'Supercar Enthusiast, California',
      testimonial: 'They tracked down the exact specification I wanted from a private owner. Amazing dedication.',
      commission: '$175,000',
      timeframe: '12 weeks',
      rarity: 'Only 80 Regeras produced',
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F01%2Fkoenigsegg-regera-gooding-and-companys-geared-online-scottsdale-edition-swedish-hypercar-auction-0.jpg?w=960&cbr=1&q=90&fit=max',
      year: '2024',
    },
    {
      id: 9,
      title: 'Feadship 85m Royal Yacht',
      category: 'Luxury Yachts',
      description: 'Former royal yacht with impeccable provenance and full documentation.',
      client: 'Private Family Office, London',
      testimonial: 'The historical significance and condition were exactly as described. Flawless transaction.',
      commission: '$1,950,000',
      timeframe: '5 months',
      rarity: 'Royal provenance',
      image: 'https://photos.superyachtapi.com/download/366613/large',
      year: '2023',
    },
    {
      id: 10,
      title: 'Rolex Daytona "Paul Newman" Ref. 6239',
      category: 'Vintage Watches',
      description: 'Original Paul Newman Daytona with exotic dial and documented provenance.',
      client: 'Watch Investment Fund, Hong Kong',
      testimonial: 'Their authentication process gave us complete confidence in this significant purchase.',
      commission: '$55,000',
      timeframe: '14 weeks',
      rarity: 'Documented Paul Newman dial',
      image: 'https://www.mercury.ru/upload/news/photo/8_001.jpg',
      year: '2024',
    },
    {
      id: 11,
      title: 'Nantucket Waterfront Estate',
      category: 'Exclusive Real Estate',
      description: 'Private 20-acre oceanfront estate with deep water dock and guest cottage.',
      client: 'Tech Executive, Boston',
      testimonial: 'Found our family\'s forever retreat in a location we thought was impossible to access.',
      commission: '$210,000',
      timeframe: '6 months',
      rarity: 'Waterfront zoning rights',
      image: 'https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1667516937629-VUC2TED8HB6E3HANUUNO/Francis+York+Waterfront+Estate+on+Nantucket+Island+13.png',
      year: '2023',
    },
    {
      id: 12,
      title: '10.47ct Kashmir Sapphire Ring',
      category: 'Fine Jewelry',
      description: 'Exceptional Kashmir sapphire with no heat treatment and museum quality.',
      client: 'Jewelry Collector, Paris',
      testimonial: 'The quality and certification exceeded all expectations. A once-in-a-lifetime acquisition.',
      commission: '$180,000',
      timeframe: '16 weeks',
      rarity: 'No heat treatment',
      image: 'https://i.pinimg.com/736x/40/5e/1d/405e1d99c96903f2af3451cc7bf0f953.jpg',
      year: '2024',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold font-serif mb-6">Success Stories</h1>
            <p className="text-xl text-gray-300 mb-8">
              Over $190.2 million in successful acquisitions across rare collectibles, luxury vehicles, 
              exclusive real estate, and fine jewelry. Each case study represents our commitment to excellence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-navy-800/50 rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400">$12.7M+</div>
                <div className="text-sm text-gray-300">Total Acquisitions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400">$4.2M+</div>
                <div className="text-sm text-gray-300">Commissions Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400">100%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400">12</div>
                <div className="text-sm text-gray-300">Featured Cases</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-navy-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.year}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Commission: {study.commission}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-gold-500 mr-2" />
                      {study.timeframe}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 text-gold-500 mr-2" />
                      {study.rarity}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 text-gold-500 mr-2" />
                      {study.commission}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-gold-500 mr-2" />
                      Success
                    </div>
                  </div>

                  <div className="border-l-4 border-gold-500 pl-4 mb-4">
                    <p className="text-gray-700 italic">"{study.testimonial}"</p>
                    <p className="text-sm text-gray-500 mt-2">— {study.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-navy-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">2,500+</div>
              <div className="text-gray-600">Successful Finds</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">6</div>
              <div className="text-gray-600">Continents Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">Your Success Story Awaits</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our exclusive clientele and let us create your next acquisition success story.
          </p>
          <Link
            to="/contact"
            className="bg-gold-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gold-700 transition-colors duration-300 inline-flex items-center"
          >
            Start Your Search
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;