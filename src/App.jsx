import './index.css'
import { Header } from './Components/Containers/Header/Header';
import { Footer } from './Components/Containers/Footer/Footer';
import { Button } from './Components/UI/Button/Button';
import { User } from './Components/Containers/User/User';
import { Player } from './Components/Containers/Player/Player';
import { Routine } from './Components/Containers/Routines/routine';
import { Counter } from './Components/Containers/Counter/Counter';
import { Menu } from './Components/Containers/Menu/Menu';

function App(){
//to use the children prop in the button component the children have to be within the tags, ergo opposite to normal react component tags which auto-close, a second one must be added (like in html)

 const user = {
  firstName:"Philip",
  lastName:"Traas",
  hobbies:[{name: "Cycling", id: "111"}, {name: "Lego", id: "222"}, {name: "F1", id: "333"}]
 }

 function del() {
  alert('delete')
 }
 function val() {
  alert('confirm')
 }


  return(
    <div>
      <Header />
      <Menu />
      <User firstName={user.firstName} lastName={user.lastName} hobbies={user.hobbies}/>
      <Routine />
      <Player />
      <br></br>
      <Footer />
      <Button color={'green'} bold={true} callBack={val}>
      <p>Confirm</p>
      </Button>
      <Button color={'red'} bold={true} callBack={del}>
      <p>Delete</p>
      </Button>
      <Counter/>
    </div>
  );
}

export default App;


