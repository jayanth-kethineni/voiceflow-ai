import { Phone } from 'lucide-react';

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-up">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-4 rounded-full">
            <Phone className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          VoiceFlow AI
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-6">
          Smart IVR Simulation Platform
        </h2>
        
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          A cloud-ready IVR simulation platform demonstrating intelligent call routing, 
          self-service automation, and agent escalation workflows inspired by real-world 
          contact center systems like Genesys.
        </p>

        {/* Creator Info */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 max-w-md mx-auto mb-8">
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-white">Created by:</span> Jayant Keethineni
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">Email:</span>{' '}
            <a href="mailto:jayanth4257@gmail.com" className="text-blue-400 hover:text-blue-300">
              jayanth4257@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mb-12">
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
          <div className="text-blue-400 text-3xl mb-3">🎯</div>
          <h3 className="text-white font-semibold mb-2">Intent Detection</h3>
          <p className="text-gray-400 text-sm">
            Intelligent routing for balance checks, transactions, and agent requests
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
          <div className="text-blue-400 text-3xl mb-3">📊</div>
          <h3 className="text-white font-semibold mb-2">Real-time Logging</h3>
          <p className="text-gray-400 text-sm">
            Track every interaction with detailed call flow logs and analytics
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
          <div className="text-blue-400 text-3xl mb-3">🔄</div>
          <h3 className="text-white font-semibold mb-2">Smart Escalation</h3>
          <p className="text-gray-400 text-sm">
            Seamless handoff to agents when needed with professional call handling
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onNavigate}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 flex items-center gap-2 animate-fade-in"
      >
        <Phone className="w-5 h-5" />
        Launch IVR Simulator
      </button>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>Professional IVR Platform Demo • Production Ready</p>
      </div>
    </div>
  );
}
