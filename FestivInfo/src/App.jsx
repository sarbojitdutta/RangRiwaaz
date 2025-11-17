import { useState, useEffect } from 'react';
import FestivalCard from './components/FestivalCards';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [festivals, setFestivals] = useState([]);
  const [filteredFestivals, setFilteredFestivals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('/festivals.json')
      .then((response) => response.json())
      .then((data) => {
        setFestivals(data);
        setFilteredFestivals(data);
      });
  }, []);

  useEffect(() => {
    let results = festivals.filter((festival) =>
      festival.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== 'All') {
      results = results.filter(
        (festival) => festival.category === selectedCategory
      );
    }

    setFilteredFestivals(results);
  }, [searchTerm, selectedCategory, festivals]);

  const categories = [
    'All',
    ...new Set(festivals.map((festival) => festival.category)),
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-indigo-800 mb-2">RangRiwaaz</h1>
        <p className="text-xl text-gray-600">Explore the rich tapestry of Indian Festivals</p>
      </header>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredFestivals.map((festival) => (
          <FestivalCard key={festival.id} festival={festival} />
        ))}
      </main>
    </div>
  );
}

export default App;
