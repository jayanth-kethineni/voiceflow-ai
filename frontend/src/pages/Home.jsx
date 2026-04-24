import { Phone, ArrowRight } from 'lucide-react';

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Main Container */}
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-5 rounded-full">
              <Phone className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-white mb-2">
            VoiceFlow AI
          </h1>
          <p className="text-2xl text-blue-300 font-semibold mb-6">
            Smart IVR Simulation Platform
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            A smart IVR simulation demonstrating real-world call routing, self-service automation, and agent escalation.
          </p>

          {/* Creator Info Card */}
          <div className="bg-slate-800/60 border border-blue-500/30 rounded-lg p-6 mb-8 backdrop-blur">
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-white">Created by:</span> Jayant Keethineni
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Email:</span>{' '}
              <a href="mailto:jayantforty57@gmail.com" className="text-blue-400 hover:text-blue-300">
                jayantforty57@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onNavigate}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg"
        >
          <Phone className="w-6 h-6" />
          Start IVR Simulator
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-6">
          No login required • Instant access • Try the demo below
        </p>
      </div>
    </div>
  );
}
