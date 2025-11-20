import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DeleteAccountPage from './pages/DeleteAccountPage';
import JobUpdatesPage from './pages/JobUpdatesPage';
import AboutUsPage from './pages/AboutUsPage';
import SupportPage from './pages/SupportPage';
import GetInTouchPage from './pages/GetInTouchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
        <Route path="/job-updates" element={<JobUpdatesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/get-in-touch" element={<GetInTouchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
