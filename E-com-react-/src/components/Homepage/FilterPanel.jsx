import React, { useState, useEffect } from 'react';

function Filter({ categories, selectedCategory, onCategoryChange, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Update selected category and search query based on URL query parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search); // Get parameters from the URL query string
    const categoryFromUrl = urlParams.get('category');
    const searchQueryFromUrl = urlParams.get('search');

    // Set the category from the URL if it's valid
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      onCategoryChange(categoryFromUrl);
    }

    // Set the search query from the URL if it exists
    if (searchQueryFromUrl) {
      setSearchQuery(searchQueryFromUrl);
      onSearch(searchQueryFromUrl); // Trigger the filtering function in the parent component
    }
  }, [categories, onCategoryChange, onSearch]);

  // Update the URL query parameters when the category is changed
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    onCategoryChange(newCategory);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('category', newCategory); // Update the category query parameter
    window.history.pushState({}, '', '?' + searchParams.toString()); // Update the URL
  };

  // Update the URL query parameters when the search query changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Trigger the filtering function in the parent component
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('search', query); // Update the search query parameter
    window.history.pushState({}, '', '?' + searchParams.toString()); // Update the URL
  };

  return (
    <div className="p-6 bg-white flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Category Filter */}
      <div className="flex items-center space-x-3 w-full sm:w-auto">
        <label htmlFor="category" className="text-gray-700 font-semibold text-lg">Filter by Category</label>
      </div>

      {/* Search Input */}
      <div className="flex items-center space-x-3 w-full sm:w-auto">
        <select
          id="category"
          className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full sm:w-auto"
          value={selectedCategory}
          onChange={handleCategoryChange} // Handle category change
        >
          <option value="All">Show All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          id="search"
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full sm:w-auto"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchChange} // Handle search input change
        />
      </div>
    </div>
  );
}

export default Filter;
