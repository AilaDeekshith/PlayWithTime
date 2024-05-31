import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Level 1" timePeriod={1}/>
        <TimerChallenge title="Level 2" timePeriod={5}/>
        <TimerChallenge title="Level 3" timePeriod={10}/>
      </div>
    </>
  );
}

export default App;
