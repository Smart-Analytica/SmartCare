import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import VoiceAssistantPage from './components/VoiceAssistantPage';


function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        {showLogin ? (
          <LoginPage setShowLogin={setShowLogin} />
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage  />} />
            <Route path="/voice-assistant" element={<VoiceAssistantPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
 