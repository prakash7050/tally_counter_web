import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    {routes?.map(route=>{
      return(
        <Route path={route?.path} element={route?.element} />
      )
    })}
   </Routes>
   </BrowserRouter>
  );
}

export default App;
