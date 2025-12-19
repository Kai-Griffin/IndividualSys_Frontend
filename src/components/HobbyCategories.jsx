import HobbyCategory from './HobbyCategory';

const HobbyCategories = ({ categories, onAddHobby }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Hobby Categories</h2>
      <div className="space-y-8">
        {categories.map((category) => (
          <HobbyCategory 
            key={category.title}
            category={category}
            onAddHobby={onAddHobby}
          />
        ))}
      </div>
    </section>
  );
};

export default HobbyCategories;