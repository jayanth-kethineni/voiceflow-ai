import { useState } from 'react';
import './index.css';
import Home from './pages/Home';
import IVRSimulator from './pages/IVRSimulator';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {currentPage === 'home' ? (
        <Home onNavigate={() => setCurrentPage('simulator')} />
      ) : (
        <IVRSimulator onBack={() => setCurrentPage('home')} />
      )}
    </div>
  );
}

export default App;
