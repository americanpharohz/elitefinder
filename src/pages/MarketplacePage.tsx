import React, { useState, useEffect } from 'react';
import { Search, Filter, Lock, LogOut, Eye, EyeOff, Plus, Edit, Trash2 } from 'lucide-react';

interface Listing {
  id: string;
  type: 'seller-needed' | 'buyer-needed';
  title: string;
  description: string;
  price: string;
  category: string;
  contactInfo: string;
  datePosted: string;
  status: 'active' | 'inactive';
}

const MarketplacePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [listings, setListings] = useState<Listing[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingListing, setEditingListing] = useState<Listing | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'seller-needed' | 'buyer-needed'>('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = [
    'Rare Collectibles',
    'Luxury Vehicles',
    'Exclusive Yachts',
    'Fine Jewelry',
    'High-End Watches',
    'Real Estate',
    'Art & Antiques',
    'Other'
  ];

  const [newListing, setNewListing] = useState({
    type: 'seller-needed' as 'seller-needed' | 'buyer-needed',
    title: '',
    description: '',
    price: '',
    category: '',
    contactInfo: '',
    status: 'active' as 'active' | 'inactive'
  });

  // Load listings from localStorage on component mount
  useEffect(() => {
    const savedListings = localStorage.getItem('marketplace-listings');
    if (savedListings) {
      setListings(JSON.parse(savedListings));
    }

    // Check if already authenticated
    const authStatus = sessionStorage.getItem('marketplace-auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Save listings to localStorage whenever listings change
  useEffect(() => {
    localStorage.setItem('marketplace-listings', JSON.stringify(listings));
  }, [listings]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in production, this should be server-side
    if (loginForm.username === 'admin' && loginForm.password === 'EliteFinder2025!') {
      setIsAuthenticated(true);
      sessionStorage.setItem('marketplace-auth', 'true');
      setLoginError('');
      setShowAdminLogin(false);
    } else {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('marketplace-auth');
    setLoginForm({ username: '', password: '' });
  };

  const handleAddListing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newListing.title || !newListing.description || !newListing.category) {
      return;
    }

    const listing: Listing = {
      id: Date.now().toString(),
      ...newListing,
      datePosted: new Date().toISOString().split('T')[0]
    };

    setListings(prev => [listing, ...prev]);
    setNewListing({
      type: 'seller-needed',
      title: '',
      description: '',
      price: '',
      category: '',
      contactInfo: '',
      status: 'active'
    });
    setShowAddForm(false);
  };

  const handleEditListing = (listing: Listing) => {
    setEditingListing(listing);
    setNewListing({
      type: listing.type,
      title: listing.title,
      description: listing.description,
      price: listing.price,
      category: listing.category,
      contactInfo: listing.contactInfo,
      status: listing.status
    });
    setShowAddForm(true);
  };

  const handleUpdateListing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingListing || !newListing.title || !newListing.description || !newListing.category) {
      return;
    }

    setListings(prev => prev.map(listing => 
      listing.id === editingListing.id 
        ? { ...listing, ...newListing }
        : listing
    ));

    setEditingListing(null);
    setNewListing({
      type: 'seller-needed',
      title: '',
      description: '',
      price: '',
      category: '',
      contactInfo: '',
      status: 'active'
    });
    setShowAddForm(false);
  };

  const handleDeleteListing = (id: string) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      setListings(prev => prev.filter(listing => listing.id !== id));
    }
  };

  const toggleListingStatus = (id: string) => {
    setListings(prev => prev.map(listing => 
      listing.id === id 
        ? { ...listing, status: listing.status === 'active' ? 'inactive' : 'active' }
        : listing
    ));
  };

  // Filter listings - only show active listings to public users
  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || listing.type === filterType;
    const matchesCategory = filterCategory === 'all' || listing.category === filterCategory;
    const isActiveOrAdmin = isAuthenticated || listing.status === 'active';
    
    return matchesSearch && matchesType && matchesCategory && isActiveOrAdmin;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-navy-900">Elite Marketplace</h1>
              <p className="text-gray-600">
                {isAuthenticated 
                  ? 'Manage your seller and buyer needed listings' 
                  : 'Browse exclusive luxury items and services'
                }
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-navy-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-navy-800 transition-colors flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Listing
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-navy-900 flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowAdminLogin(true)}
                  className="text-gray-600 hover:text-navy-900 flex items-center text-sm"
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Admin Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Search className="h-4 w-4 inline mr-2" />
                Search
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search listings..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="h-4 w-4 inline mr-2" />
                Type
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="seller-needed">Seller Needed</option>
                <option value="buyer-needed">Buyer Needed</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Admin Login Modal */}
        {showAdminLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
              <div className="text-center mb-6">
                <Lock className="h-12 w-12 text-navy-900 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-navy-900">Admin Login</h2>
                <p className="text-gray-600">Access marketplace management</p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    required
                  />
                </div>
                
                {loginError && (
                  <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                    {loginError}
                  </div>
                )}
                
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowAdminLogin(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-navy-900 text-white py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Add/Edit Form Modal */}
        {showAddForm && isAuthenticated && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                {editingListing ? 'Edit Listing' : 'Add New Listing'}
              </h2>
              
              <form onSubmit={editingListing ? handleUpdateListing : handleAddListing} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type *
                    </label>
                    <select
                      value={newListing.type}
                      onChange={(e) => setNewListing(prev => ({ ...prev, type: e.target.value as any }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      required
                    >
                      <option value="seller-needed">Seller Needed</option>
                      <option value="buyer-needed">Buyer Needed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      value={newListing.category}
                      onChange={(e) => setNewListing(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={newListing.title}
                    onChange={(e) => setNewListing(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="Enter listing title"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={newListing.description}
                    onChange={(e) => setNewListing(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="Detailed description of the item or service"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price/Budget
                    </label>
                    <input
                      type="text"
                      value={newListing.price}
                      onChange={(e) => setNewListing(prev => ({ ...prev, price: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      placeholder="e.g., $50,000 or Negotiable"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      value={newListing.status}
                      onChange={(e) => setNewListing(prev => ({ ...prev, status: e.target.value as any }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Information
                  </label>
                  <input
                    type="text"
                    value={newListing.contactInfo}
                    onChange={(e) => setNewListing(prev => ({ ...prev, contactInfo: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="Email, phone, or preferred contact method"
                  />
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddForm(false);
                      setEditingListing(null);
                      setNewListing({
                        type: 'seller-needed',
                        title: '',
                        description: '',
                        price: '',
                        category: '',
                        contactInfo: '',
                        status: 'active'
                      });
                    }}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-navy-900 text-white rounded-lg font-semibold hover:bg-navy-800 transition-colors"
                  >
                    {editingListing ? 'Update Listing' : 'Add Listing'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      listing.type === 'seller-needed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {listing.type === 'seller-needed' ? 'Seller Needed' : 'Buyer Needed'}
                    </span>
                    {isAuthenticated && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        listing.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {listing.status}
                      </span>
                    )}
                  </div>
                  {isAuthenticated && (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleListingStatus(listing.id)}
                        className="text-gray-400 hover:text-gray-600"
                        title={listing.status === 'active' ? 'Deactivate' : 'Activate'}
                      >
                        {listing.status === 'active' ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => handleEditListing(listing)}
                        className="text-gray-400 hover:text-navy-600"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteListing(listing.id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-navy-900 mb-2">{listing.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{listing.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                  <div>
                    <span className="font-medium">Category:</span> {listing.category}
                  </div>
                  <div>
                    <span className="font-medium">Posted:</span> {listing.datePosted}
                  </div>
                  {listing.price && (
                    <div>
                      <span className="font-medium">Price:</span> {listing.price}
                    </div>
                  )}
                  {listing.contactInfo && (
                    <div>
                      <span className="font-medium">Contact:</span> {listing.contactInfo}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No listings found</h3>
            <p className="text-gray-500">
              {searchTerm || filterType !== 'all' || filterCategory !== 'all' 
                ? 'Try adjusting your search or filters'
                : 'No active listings available at the moment'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplacePage;