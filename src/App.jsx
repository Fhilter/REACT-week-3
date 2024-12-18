import './index.css'
import { Header } from './Components/Containers/Header/Header';
import { Footer } from './Components/Containers/Footer/Footer';
import { Button } from './Components/UI/Button/Button';
import { User } from './Components/Containers/User/User';
import { Player } from './Components/Containers/Player/Player';

function App(){
//to use the children prop in the button component the children have to be within the tags, ergo opposite to normal react component tags which auto-close, a second one must be added (like in html)
  return(
    <div>
      <Header />
      <User />
      <Player />
      <br></br>
      <Footer />
      <Button color={'green'} bold={true}>
      <p>Confirm</p>
      </Button>
    </div>
  );
}

export default App;


