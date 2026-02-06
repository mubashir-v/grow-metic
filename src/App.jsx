import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Courses from './pages/Courses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Courses />} />
          {/* Redirect old paths to home */}
          <Route path="courses" element={<Navigate to="/" replace />} />
          <Route path="ug" element={<Navigate to="/" replace />} />
          <Route path="pg" element={<Navigate to="/" replace />} />
          <Route path="open" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
