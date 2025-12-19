import SelectedHobbyItem from './SelectedHobbyItem';

const SelectedHobbies = ({ hobbies, onRemoveHobby }) => {
  return (
    <div>
      {hobbies.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">🎯</div>
          <p className="text-gray-500">No hobbies selected</p>
        </div>
      ) : (
        <div className="space-y-4">
          {hobbies.map((hobby) => (
            <SelectedHobbyItem 
              key={hobby.id} 
              hobby={hobby}
              onRemoveHobby={onRemoveHobby}
            />
          ))}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button 
              onClick={() => onRemoveHobby('clear-all')}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-medium transition-colors"
            >
              Clear All Hobbies
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedHobbies;