import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import JecPlacements from './pages/JecPlacements';
import AecPlacements from './pages/AecPlacements';
import GecPlacements from './pages/GecPlacements';
import DecPlacements from './pages/DecPlacements';
import CitPlacements from './pages/CitPlacements';
import TezpurPlacements from './pages/TezpurPlacements';
import AecCutoffs from './pages/AecCutoffs';
import JecCutoffs from './pages/JecCutoffs';
import Cee2025 from './pages/Cee2025';
import Cee2024 from './pages/Cee2024';
import Cee2023 from './pages/Cee2023';
import Cee2022 from './pages/Cee2022';
import Cee2021 from './pages/Cee2021';
import Cee2020 from './pages/Cee2020';
import BoardsNotes from './pages/BoardsNotes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineering/placements" element={<JecPlacements />} />
          <Route path="/engineering/placements/assam-engineering-college" element={<AecPlacements />} />
          <Route path="/engineering/placements/golaghat-engineering-college" element={<GecPlacements />} />
          <Route path="/engineering/placements/dhemaji-engineering-college" element={<DecPlacements />} />
          <Route path="/engineering/placements/cit-kokrajhar" element={<CitPlacements />} />
          <Route path="/engineering/placements/tezpur-university" element={<TezpurPlacements />} />
          <Route path="/engineering/cutoffs/aec" element={<AecCutoffs />} />
          <Route path="/engineering/cutoffs/jec" element={<JecCutoffs />} />
          <Route path="/cee/2025" element={<Cee2025 />} />
          <Route path="/cee/2024" element={<Cee2024 />} />
          <Route path="/cee/2023" element={<Cee2023 />} />
          <Route path="/cee/2022" element={<Cee2022 />} />
          <Route path="/cee/2021" element={<Cee2021 />} />
          <Route path="/cee/2020" element={<Cee2020 />} />
          <Route path="/boards/:grade/notes" element={<BoardsNotes />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



