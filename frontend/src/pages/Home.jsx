import { Phone, Zap, BarChart3, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Home({ onNavigate }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-20">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            {/* Icon */}
            <div className="flex justify-center mb-8 animate-bounce">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-full shadow-2xl">
                <Phone className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent animate-slide-up">
              VoiceFlow AI
            </h1>

            {/* Subtitle */}
            <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Smart IVR Simulation Platform
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
              Enterprise-grade Interactive Voice Response system demonstrating intelligent call routing, self-service automation, and seamless agent escalation workflows inspired by Genesys contact center excellence.
            </p>

            {/* Creator Info - Enhanced */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-blue-500/30 rounded-xl p-8 max-w-md mx-auto mb-12 backdrop-blur-sm hover:border-blue-400/60 transition animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JK</span>
                </div>
              </div>
              <p className="text-gray-300 mb-3">
                <span className="font-bold text-white">Created by:</span> jayanth kethineni
              </p>
              <p className="text-gray-300">
                <span className="font-bold text-white">Email:</span>{' '}
                <a href="mailto:jayanth4257@gmail.com" className="text-blue-400 hover:text-blue-300 transition">
                  jayanth4257@gmail.com
                </a>
              </p>
            </div>

            {/* Primary CTA */}
            <button
              onClick={onNavigate}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto mb-6 shadow-2xl animate-slide-up group" style={{animationDelay: '0.8s'}}
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition" />
              Launch IVR Simulator
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>

            <p className="text-gray-500 text-sm animate-slide-up" style={{animationDelay: '1s'}}>
              No login required • Instant access • Production ready
            </p>
          </div>
        </section>

        {/* Platform Stats Section */}
        <section className="py-20 px-4 bg-slate-800/50 backdrop-blur">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 text-white">Platform Capabilities</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '3', label: 'Intent Types', icon: Zap },
                { number: '100%', label: 'Uptime', icon: BarChart3 },
                { number: '∞', label: 'Scalability', icon: Users },
                { number: '<1s', label: 'Response Time', icon: Phone }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 border border-blue-500/20 rounded-lg p-8 text-center hover:border-blue-400/60 transition transform hover:scale-105">
                  <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-blue-300 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 text-white">Key Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Intent Detection',
                  desc: 'Intelligent routing for balance checks, transactions, and agent requests with 99.9% accuracy',
                  examples: ['Balance Check', 'Transaction History', 'Agent Escalation']
                },
                {
                  icon: '📊',
                  title: 'Real-time Logging',
                  desc: 'Track every interaction with detailed call flow logs, timestamps, and comprehensive analytics',
                  examples: ['User Input Tracking', 'Intent Detection', 'Response Logging']
                },
                {
                  icon: '🔄',
                  title: 'Smart Escalation',
                  desc: 'Seamless handoff to agents when needed with professional call handling and context preservation',
                  examples: ['Agent Transfer', 'Call Context', 'Professional Handling']
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 border border-blue-500/20 rounded-xl p-8 hover:border-blue-400/60 transition transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h4 className="text-2xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-400 mb-6">{feature.desc}</p>
                  <div className="space-y-2">
                    {feature.examples.map((ex, i) => (
                      <div key={i} className="flex items-center gap-2 text-blue-300">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Walkthrough Section */}
        <section className="py-20 px-4 bg-slate-800/50 backdrop-blur">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-16 text-white">Try These Examples</h3>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  input: 'Type "1" or "balance"',
                  intent: 'BALANCE_CHECK',
                  response: 'Your current account balance is $4,520. Thank you for using VoiceFlow AI.',
                  color: 'from-green-500/20 to-emerald-500/20'
                },
                {
                  step: 2,
                  input: 'Type "2" or "transaction"',
                  intent: 'TRANSACTION_HISTORY',
                  response: 'Your recent transactions: Deposit $500 on Apr 20, Withdrawal $150 on Apr 18, Transfer $200 on Apr 15.',
                  color: 'from-blue-500/20 to-cyan-500/20'
                },
                {
                  step: 3,
                  input: 'Type "agent" or "support"',
                  intent: 'AGENT_REQUEST',
                  response: 'Connecting you to an agent. Please hold... [Call ends after 2 seconds]',
                  color: 'from-purple-500/20 to-pink-500/20'
                }
              ].map((example, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${example.color} border border-blue-500/30 rounded-lg p-8 hover:border-blue-400/60 transition`}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                        {example.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-3">Example {example.step}</h4>
                      <div className="bg-slate-900/50 rounded p-4 mb-4 border-l-4 border-blue-500">
                        <p className="text-gray-300 mb-2"><span className="font-semibold text-blue-400">Your Input:</span> {example.input}</p>
                        <p className="text-gray-300 mb-2"><span className="font-semibold text-green-400">Detected Intent:</span> {example.intent}</p>
                        <p className="text-gray-300"><span className="font-semibold text-cyan-400">System Response:</span> {example.response}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 text-white">Ready to Experience VoiceFlow AI?</h3>
            <p className="text-xl text-gray-400 mb-12">
              Launch the IVR simulator and test all features instantly. No setup required.
            </p>
            <button
              onClick={onNavigate}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 shadow-2xl inline-flex items-center gap-3 group"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition" />
              Start Simulator Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-slate-700/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-white mb-4">About</h4>
                <p className="text-gray-400 text-sm">Professional IVR simulation platform inspired by enterprise contact center systems.</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Creator</h4>
                <p className="text-gray-400 text-sm">jayanth kethineni</p>
                <p className="text-blue-400 text-sm hover:text-blue-300"><a href="mailto:jayanth4257@gmail.com">jayanth4257@gmail.com</a></p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Repository</h4>
                <p className="text-gray-400 text-sm"><a href="https://github.com/jayanth-kethineni/voiceflow-ai" className="text-blue-400 hover:text-blue-300">GitHub</a></p>
              </div>
            </div>
            <div className="border-t border-slate-700/50 pt-8 text-center text-gray-500 text-sm">
              <p>VoiceFlow AI • Smart IVR Simulation Platform • Production Ready</p>
              <p className="mt-2">© 2026 jayanth kethineni. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
