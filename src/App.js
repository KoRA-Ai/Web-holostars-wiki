import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Detail from './Detail';
import Member from './Member';
import appcss from './App.module.css';
function App() {
  return (
    <BrowserRouter>
      <div className={appcss.menu}>
        <Link to='/' className={appcss.menulink}>
          <label >Main</label>
        </Link>

      </div>
      <Routes>
        <Route path='/' element={<Member />} />
        <Route path='/detail' element={<Detail />} >
          <Route path=':id' element={<Detail />}/>
        </Route>
        
        <Route path='*' element={<p>404</p>} />
      </Routes></BrowserRouter>
  );
}

export default App;
