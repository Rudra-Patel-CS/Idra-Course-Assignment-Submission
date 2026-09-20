import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Prediction from './pages/Prediction';
import ModelPerformance from './pages/ModelPerformance';
import About from './pages/About';
import { getHealth } from './services/api';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const status = await getHealth();
        if (status?.status === 'running' && status?.model_loaded) {
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      } catch (err) {
        setIsConnected(false);
      }
    };

    checkBackend();
    const interval = setInterval(checkBackend, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="flex min-h-screen bg-slate-950 text-slate-100 font-sans">
        <Sidebar isConnected={isConnected} />
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/model-performance" element={<ModelPerformance />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
