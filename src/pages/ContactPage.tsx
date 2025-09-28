import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    budget: '',
    timeline: '',
    description: '',
    confidential: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    'Rare Collectibles',
    'Luxury Vehicles',
    'Exclusive Yachts',
    'Private Jets',
    'Fine Jewelry & Gemstones',
    'High-End Watches',
    'Off-Market Real Estate',
    'Fine Art & Antiques',
    'Other Luxury Items'
  ];

  const budgetRanges = [
    'Under $100,000',
    '$100,000 - $500,000',
    '$500,000 - $1,000,000',
    '$1,000,000 - $5,000,000',
    '$5,000,000 - $10,000,000',
    'Over $10,000,000',
    'Prefer to discuss privately'
  ];

  const timelineOptions = [
    'No rush - when the right item appears',
    'Within 6 months',
    'Within 3 months',
    'Within 1 month',
    'Urgent - ASAP'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.budget) newErrors.budget = 'Budget range is required';
    if (!formData.timeline) newErrors.timeline = 'Timeline is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Replace '/api/contact' with your backend endpoint
      const response = await fetch('https://elitefinder.vip/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Optionally handle error response
        setErrors(prev => ({ ...prev, submit: 'Submission failed. Please try again.' }));
      }
    } catch (error) {
      setErrors(prev => ({ ...prev, submit: 'Network error. Please try again.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your inquiry has been received. One of our acquisition specialists will contact you within 24 hours to discuss your requirements in complete confidence.
          </p>
          <button 
            onClick={() => {setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', category: '', budget: '', timeline: '', description: '', confidential: false });}}
            className="bg-navy-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-navy-800 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold font-serif mb-6">Start Your Search</h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to acquire the impossible? Contact Elite Finder Services for a confidential consultation 
              about your luxury acquisition needs. Our global network awaits your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="bg-navy-950 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold font-serif mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-gold-500 mr-4" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (929) 344-2202</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-gold-500 mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">info@elitefinder.vip</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-gold-500 mr-4" />
                  <div>
                    <div className="font-semibold">Offices</div>
                    <div className="text-gray-300">Worldwide</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-gold-500 mr-4" />
                  <div>
                    <div className="font-semibold">Availability</div>
                    <div className="text-gray-300">24/7 for VIP clients</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-gold-500 mr-4" />
                  <div>
                    <div className="font-semibold">Global Network</div>
                    <div className="text-gray-300">500+ partners worldwide</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-navy-800">
                <h3 className="font-semibold mb-4 text-gold-400">Why Choose Elite Finder?</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 15+ years of acquisition expertise</li>
                  <li>• Access to private collectors worldwide</li>
                  <li>• Complete confidentiality guaranteed</li>
                  <li>• Expert authentication services</li>
                  <li>• Competitive 1-3% commission structure</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold font-serif text-navy-900 mb-6">Confidential Inquiry Form</h2>
              <p className="text-gray-600 mb-8">
                All information provided is strictly confidential. Please provide as much detail as possible 
                to help us understand your acquisition requirements.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Optional - for priority communication"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent ${errors.budget ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent ${errors.timeline ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Please provide as much detail as possible about the item you're seeking, including specific models, years, conditions, provenance requirements, etc."
                  ></textarea>
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="confidential"
                    id="confidential"
                    checked={formData.confidential}
                    onChange={handleChange}
                    className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                  />
                  <label htmlFor="confidential" className="ml-2 text-sm text-gray-700">
                    This is an extremely confidential inquiry requiring maximum discretion
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-navy-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-navy-800 transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        Submit Confidential Inquiry
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>

                {errors.submit && <p className="text-red-500 text-sm mt-2">{errors.submit}</p>}
              </form>
              
              <div className="mt-6 p-4 bg-gold-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Confidentiality Promise:</strong> All inquiries are handled with complete discretion. 
                  Your information is never shared, and all communications are conducted through secure channels. 
                  Response within 24 hours guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;