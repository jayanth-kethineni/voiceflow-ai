import { useState } from 'react';
import { Phone, ArrowRight, Zap, BarChart3, Users, CheckCircle } from 'lucide-react';

export default function Home({ onNavigate }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl animate-bounce">
                <Phone className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              VoiceFlow AI
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-6">
              Smart IVR Simulation Platform
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              A cloud-ready IVR simulation platform demonstrating intelligent call routing, self-service automation, and agent escalation workflows inspired by real-world contact center systems like Genesys.
            </p>

            {/* Creator Info */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-lg p-6 mb-8 backdrop-blur-sm">
              <p className="text-gray-200 mb-2">
                <span className="font-semibold text-white">Created by:</span> Jayant Keethineni
              </p>
              <p className="text-gray-200">
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href="mailto:jayanth4257@gmail.com" className="text-blue-400 hover:text-blue-300 transition">
                  jayanth4257@gmail.com
                </a>
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={onNavigate}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>Launch IVR Simulator</span>
              <ArrowRight className={`w-5 h-5 transition-transform ${isHovering ? 'translate-x-1' : ''}`} />
            </button>

            {/* Tagline */}
            <p className="mt-8 text-gray-400 text-sm">
              No login required • Instant access • Try the demo below
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-white text-center mb-16">
              Platform Capabilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/30 rounded-lg p-8 backdrop-blur-sm hover:border-blue-300/50 transition-all">
                <div className="p-3 bg-blue-500/30 rounded-lg w-fit mb-4">
                  <Zap className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Intent Detection</h4>
                <p className="text-gray-300">Intelligent routing for balance checks, transactions, and agent requests</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/30 rounded-lg p-8 backdrop-blur-sm hover:border-purple-300/50 transition-all">
                <div className="p-3 bg-purple-500/30 rounded-lg w-fit mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-300" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Real-time Logging</h4>
                <p className="text-gray-300">Track every interaction with detailed call flow logs and analytics</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/10 border border-pink-400/30 rounded-lg p-8 backdrop-blur-sm hover:border-pink-300/50 transition-all">
                <div className="p-3 bg-pink-500/30 rounded-lg w-fit mb-4">
                  <Users className="w-6 h-6 text-pink-300" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Smart Escalation</h4>
                <p className="text-gray-300">Seamless handoff to agents when needed with professional call handling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Guide Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white text-center mb-16">
              Try These Examples
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Example 1 */}
              <div className="bg-slate-800/50 border border-blue-400/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h4 className="text-lg font-bold text-white">Check Balance</h4>
                </div>
                <p className="text-gray-300 mb-4">Type <span className="text-blue-300 font-mono">"1"</span> or <span className="text-blue-300 font-mono">"balance"</span></p>
                <p className="text-sm text-gray-400">See your account balance: <span className="text-green-400 font-bold">$4,520</span></p>
              </div>

              {/* Example 2 */}
              <div className="bg-slate-800/50 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h4 className="text-lg font-bold text-white">View Transactions</h4>
                </div>
                <p className="text-gray-300 mb-4">Type <span className="text-purple-300 font-mono">"2"</span></p>
                <p className="text-sm text-gray-400">Get your last 3 transactions instantly</p>
              </div>

              {/* Example 3 */}
              <div className="bg-slate-800/50 border border-pink-400/30 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h4 className="text-lg font-bold text-white">Talk to Agent</h4>
                </div>
                <p className="text-gray-300 mb-4">Type <span className="text-pink-300 font-mono">"agent"</span></p>
                <p className="text-sm text-gray-400">Get connected to a support agent</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Ready to Experience VoiceFlow AI?</h3>
          <button
            onClick={onNavigate}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <span>Start Interactive Demo</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-8 text-gray-400">Professional IVR Platform Demo • Production Ready</p>
        </div>
      </div>
    </div>
  );
}
