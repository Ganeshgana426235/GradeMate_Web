import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DeleteAccountPage from './pages/DeleteAccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
