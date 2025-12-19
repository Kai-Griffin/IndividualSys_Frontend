const HobbyItem = ({ hobby, onAddHobby }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{hobby.icon}</span>
        <span className="font-medium text-gray-800">{hobby.name}</span>
      </div>
      <button 
        onClick={() => onAddHobby(hobby)}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
      >
        Add
      </button>
    </div>
  );
};

export default HobbyItem;