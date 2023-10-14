import { Add, ArrowBack, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from '@mui/icons-material';
import './App.css';
import logo from './Pinterest-logo.png';
import MenuContainer from './components/MenuContainer';
import { useEffect } from 'react';
import Pin from './components/Pin';

function App() {
  useEffect(()=>{
    const allIcons = document.querySelectorAll(".iconContainer");

    function setMenuActive(){
      allIcons.forEach(n=>n.classList.remove('active'));
      this.classList.add('active');
    }

    allIcons.forEach(n => n.addEventListener('click', setMenuActive));
  },[]);
  return (
    <div className="App">
      <div className='menuContainer'>
        <img src={logo} alt='logo' className='logo' />
        <div className='submenu'>
          <MenuContainer icon={<Person />}/>
          <MenuContainer icon={<Notifications />}/>
          <MenuContainer icon={<Chat />}/>
        </div>

        <div className='submenu'>
          <MenuContainer icon={<FavoriteRounded />}/>
        </div>

        <div className='submenu'>
          <MenuContainer icon={<QuestionMark />}/>
          <MenuContainer icon={<Add />}/>
        </div>

      </div>
      <main>
        <div className='searchBox'>
          <input type='text' placeholder='Search.. ' />
          <div className='search'>{<ArrowBack />}</div>
        </div>
        <div className='mainContainer'>
          <Pin pinsize={'small'}/>
          <Pin pinsize={'medium'}/>
          <Pin pinsize={'large'}/>
          <Pin pinsize={'small'}/>
          <Pin pinsize={'medium'}/>
          <Pin pinsize={'large'}/>
          <Pin pinsize={'small'}/>
          <Pin pinsize={'medium'}/>
          <Pin pinsize={'large'}/>
          <Pin pinsize={'small'}/>
          <Pin pinsize={'medium'}/>
          <Pin pinsize={'large'}/>
          <Pin pinsize={'small'}/>
          <Pin pinsize={'medium'}/>
          <Pin pinsize={'large'}/>
          <Pin pinsize={'small'}/>
          <Pin pinsize={'medium'}/>
          <Pin pinsize={'large'}/>
        </div>
      </main>
    </div>
  );
}

export default App;
