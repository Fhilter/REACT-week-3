import './index.css'
import { Header } from './Components/Containers/Header/Header';
import { Footer } from './Components/Containers/Footer/Footer';
import { Button } from './Components/UI/Button/Button';
import { User } from './Components/Containers/User/User';
import { Player } from './Components/Containers/Player/Player';

function App(){

  return(
    <div>
      <Header />
      <User />
      <Footer />
      <Player />
      <br></br>
      <Button />
    </div>
  );
}

export default App;


