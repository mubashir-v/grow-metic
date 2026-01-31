import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import UGPath from './pages/UGPath';
import PGPath from './pages/PGPath';
import OpenPath from './pages/OpenPath';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="ug" element={<UGPath />} />
          <Route path="pg" element={<PGPath />} />
          <Route path="open" element={<OpenPath />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
