import logo from './logo.svg';
import './App.css';
import AddSubscriber from './components/AddSubscriber';
import ViewSubscriber from './components/ViewSubscriber';
import SearchSubscriber from './components/SearchSubscriber';
import DeleteSubscriber from './components/DeleteSubscriber';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddSubscriber/>}/>
      <Route path='/View' element={<ViewSubscriber/>}/>
      <Route path='/Search' element={<SearchSubscriber/>}/>
      <Route path='/Delete' element={<DeleteSubscriber/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
