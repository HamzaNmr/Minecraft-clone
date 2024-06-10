import { World } from './components/World';
import hands from './images/hands.png';

function App() {


  return (
    <div className='canvas-container'>
      <World/>
      <div className='cursor absolute centered'>
        +
      </div>
    </div>
  );
}

export default App;
