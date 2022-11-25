
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ClimaNews from './components/ClimaNews/ClimaNews';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NewNotice from './components/NewNotice/NewNotice';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalProvider>

      
      <Header>

      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ClimaNews" element={<ClimaNews />} />
        <Route path="/NewNotice" element={<NewNotice />} />
      </Routes>
      </GlobalProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;

