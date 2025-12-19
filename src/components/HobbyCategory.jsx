import HobbyList from './HobbyList';

const HobbyCategory = ({ category, onAddHobby }) => {
  return (
    <article className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
        <span className="bg-indigo-100 p-2 rounded-lg">{category.title}</span>
      </h3>
      <HobbyList 
        hobbies={category.games} 
        onAddHobby={onAddHobby} 
      />
    </article>
  );
};

export default HobbyCategory;