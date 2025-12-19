import SelectedHobbies from './SelectedHobbies';

const HobbySelector = ({ selectedHobbies, onRemoveHobby }) => {
  return (
    <aside className="bg-white rounded-xl shadow-md p-6 sticky top-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Hobbies</h2>
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
          {selectedHobbies.length} selected
        </span>
      </div>
      
      <SelectedHobbies 
        hobbies={selectedHobbies}
        onRemoveHobby={onRemoveHobby}
      />
    </aside>
  );
};

export default HobbySelector;