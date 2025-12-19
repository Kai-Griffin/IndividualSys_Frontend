const SelectedHobbyItem = ({ hobby, onRemoveHobby }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg border border-indigo-100">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{hobby.icon}</span>
        <span className="font-medium text-gray-800">{hobby.name}</span>
      </div>
      <button 
        onClick={() => onRemoveHobby(hobby.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default SelectedHobbyItem;