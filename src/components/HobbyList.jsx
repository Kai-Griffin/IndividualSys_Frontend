import HobbyItem from './HobbyItem';

const HobbyList = ({ hobbies, onAddHobby }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {hobbies.map((game) => (
        <HobbyItem 
          key={game.id} 
          hobby={game}
          onAddHobby={onAddHobby}
        />
      ))}
    </div>
  );
};

export default HobbyList;