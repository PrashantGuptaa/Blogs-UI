import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/Navbar';
import {Routes, Route } from 'react-router-dom';
import appRoutes from './Config/routes';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
      {appRoutes.map((route, index) => {
        const { path, element: Element } = route;
        return (
          <Route key={index} path={path} element={<Element />} />
        );
      })}
      </Routes>
    
    </div>
  );
}

export default App;
