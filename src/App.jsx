import { useState } from 'react';
import Header from './components/Header';
import HobbyCategories from './components/HobbyCategories';
import HobbySelector from './components/HobbySelector';
import Footer from './components/Footer';
import hobbiesData from './data/hobbies.json';

function App() {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const addHobby = (hobby) => {
    if (!selectedHobbies.find(h => h.id === hobby.id)) {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  const removeHobby = (id) => {
    if (id === 'clear-all') {
      setSelectedHobbies([]);
    } else {
      setSelectedHobbies(selectedHobbies.filter(hobby => hobby.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
         
          <section className="w-full lg:w-2/3">
            <HobbyCategories 
              categories={hobbiesData.categories} 
              onAddHobby={addHobby} 
            />
          </section>
          
          
          <aside className="w-full lg:w-1/3">
            <HobbySelector 
              selectedHobbies={selectedHobbies}
              onRemoveHobby={removeHobby}
            />
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;