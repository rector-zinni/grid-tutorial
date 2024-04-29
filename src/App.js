import logo from './logo.svg';
import './App.css';

import Nav from './views/Nav'
import Hero,{Features,DarkHero} from './views/Hero'

function App() {
  return (
    <div className="">
    

    <div className='App'>
    <Nav/>
      <Hero/>
    </div>
<Features/>
<DarkHero/>
    </div>
  );
}

export default App;
