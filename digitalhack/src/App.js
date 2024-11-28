import ParticipantList from './ParticipantList';
import './App.css';

function App(props) {
  const partList = props.participants.filter(participant => participant.show).map((participant) => (
    <ParticipantList
      id={participant.id}
      name={participant.name}
      active={participant.active}
      key={participant.id}
    />
  )
  );   
  return (
    <div className='mainPage'>
      <div className='header'>
        <h1>Последовательность выступления команд</h1>
        <h4>Подробнее о Хакатоне</h4>
      </div>
      <div className='mainList'>{partList}</div>
    </div>
  )
}

export default App;