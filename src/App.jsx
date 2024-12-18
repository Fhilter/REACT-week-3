import './index.css'
import { Header } from './Components/Containers/Header/Header';
import { Footer } from './Components/Containers/Footer/Footer';
import { Button } from './Components/UI/Button/Button';
import { User } from './Components/Containers/User/User';
import { Player } from './Components/Containers/Player/Player';

function App(){
//to use the children prop in the button component the children have to be within the tags, ergo opposite to normal react component tags which auto-close, a second one must be added (like in html)

 const user = {
  firstName:"Phil",
  lastName:"Tr",
  hobbies:[{name: "Cycling", id: "uib25FHPQEF"}, {name: "Lego", id: "iafboafbw23"}, {name: "F1", id: "uqh98yqe2w9"}]
 }
  return(
    <div>
      <Header />
      <User firstName={user.firstName} lastName={user.lastName} hobbies={user.hobbies}/>
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


