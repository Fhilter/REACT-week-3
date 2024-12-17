import './App.css'
import { Header } from './Components/Containers/Header/Header';
import { Footer } from './Components/Containers/Footer/Footer';
import { Button } from './Components/UI/Button/Button';
import { User } from './Components/Containers/User/User';

function App(){

  return(
    <div>
      <Header />
      <User />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
