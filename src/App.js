import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MenuPage from './pages/MainPage'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import NewRecord from './pages/NewRecord';
import Records from './pages/Records';


function App() {
  return (
   < BrowserRouter>
   <Routes>
    <Route Component={Layout}>
      <Route path='/' Component={MainPage} />
      <Route path='/newrec' Component={NewRecord}/>
      <Route path='/records' Component={Records}/>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
