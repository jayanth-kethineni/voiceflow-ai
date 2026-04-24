import { useState, useRef, useEffect } from 'react';
import { Phone, Send, ArrowLeft, Loader } from 'lucide-react';
import CallLog from '../components/CallLog';

const IVR_RESPONSES = {
  BALANCE_CHECK: {
    intent: 'BALANCE_CHECK',
    message: 'Your current account balance is $4,520. Thank you for using VoiceFlow AI.',
    data: { balance: '$4,520' }
  },
  TRANSACTION_HISTORY: {
    intent: 'TRANSACTION_HISTORY',
    message: 'Your recent transactions: Deposit $500 on Apr 20, Withdrawal $150 on Apr 18, Transfer $200 on Apr 15.',
    data: {
      transactions: [
        { date: 'Apr 20', type: 'Deposit', amount: '$500' },
        { date: 'Apr 18', type: 'Withdrawal', amount: '$150' },
        { date: 'Apr 15', type: 'Transfer', amount: '$200' }
      ]
    }
  },
  AGENT_REQUEST: {
    intent: 'AGENT_REQUEST',
    message: 'Connecting you to an agent. Please hold...',
    data: { status: 'escalated' }
  },
  UNKNOWN: {
    intent: 'UNKNOWN',
    message: 'I did not understand that. Please press 1 for balance, 2 for transactions, or say agent for support.',
    data: {}
  }
};

function detectIntent(input) {
  const lower = input.toLowerCase().trim();
  
  if (lower === '1' || lower.includes('balance')) {
    return IVR_RESPONSES.BALANCE_CHECK;
  }
  if (lower === '2' || lower.includes('transaction')) {
    return IVR_RESPONSES.TRANSACTION_HISTORY;
  }
  if (lower === 'agent' || lower.includes('support') || lower.includes('representative')) {
    return IVR_RESPONSES.AGENT_REQUEST;
  }
  
  return IVR_RESPONSES.UNKNOWN;
}

export default function IVRSimulator({ onBack }) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [logs, setLogs] = useState([]);
  const [callDuration, setCallDuration] = useState(0);
  const messagesEndRef = useRef(null);
  const callTimerRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Call timer
  useEffect(() => {
    if (isCallActive) {
      callTimerRef.current = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    } else {
      if (callTimerRef.current) clearInterval(callTimerRef.current);
    }
    return () => {
      if (callTimerRef.current) clearInterval(callTimerRef.current);
    };
  }, [isCallActive]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartCall = () => {
    setIsCallActive(true);
    setMessages([
      {
        type: 'system',
        content: 'Welcome to VoiceFlow AI. Press 1 for balance inquiry, Press 2 for transaction history, or say "agent" to speak with an agent.',
        timestamp: new Date()
      }
    ]);
    setLogs([]);
    setCallDuration(0);
  };

  const handleSendInput = async () => {
    if (!userInput.trim() || !isCallActive || isLoading) return;

    const input = userInput.trim();
    setUserInput('');
    setIsLoading(true);

    // Add user message
    setMessages(prev => [
      ...prev,
      { type: 'user', content: input, timestamp: new Date() }
    ]);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Detect intent
    const response = detectIntent(input);

    // Add log entry
    const logEntry = {
      id: logs.length + 1,
      userInput: input,
      detectedIntent: response.intent,
      response: response.message,
      timestamp: new Date()
    };
    setLogs(prev => [...prev, logEntry]);

    // Add system response with typing animation
    setMessages(prev => [
      ...prev,
      { type: 'system', content: response.message, timestamp: new Date() }
    ]);

    // If escalated, end call after 2 seconds
    if (response.intent === 'AGENT_REQUEST') {
      setTimeout(() => {
        setIsCallActive(false);
      }, 2000);
    }

    setIsLoading(false);
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setMessages([]);
    setLogs([]);
    setCallDuration(0);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold text-white">IVR Simulator</h1>
          <div className="w-24"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Call Interface - Left/Center */}
          <div className="lg:col-span-2">
            {/* Call Status Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${isCallActive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                  <span className="text-white font-semibold">
                    {isCallActive ? 'Call Connected' : 'Call Ended'}
                  </span>
                </div>
                <span className="text-gray-400 font-mono">{formatTime(callDuration)}</span>
              </div>

              {/* Call Control Buttons */}
              <div className="flex gap-3">
                {!isCallActive ? (
                  <button
                    onClick={handleStartCall}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Start Call
                  </button>
                ) : (
                  <button
                    onClick={handleEndCall}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    End Call
                  </button>
                )}
              </div>
            </div>

            {/* Chat Interface */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
              <div className="h-96 bg-slate-900/50 rounded-lg p-4 mb-4 overflow-y-auto flex flex-col">
                {messages.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <p>Start a call to begin</p>
                  </div>
                ) : (
                  <>
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                      >
                        <div
                          className={`max-w-xs px-4 py-2 rounded-lg ${
                            msg.type === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-700 text-gray-100'
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {msg.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start mb-4">
                        <div className="bg-slate-700 text-gray-100 px-4 py-2 rounded-lg flex items-center gap-2">
                          <Loader className="w-4 h-4 animate-spin" />
                          <span className="text-sm">Processing...</span>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input Area */}
              {isCallActive && (
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter: 1, 2, or 'agent'"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleSendInput();
                    }}
                    disabled={isLoading}
                    className="flex-1 bg-slate-900 border border-slate-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 disabled:opacity-50"
                  />
                  <button
                    onClick={handleSendInput}
                    disabled={isLoading || !userInput.trim()}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Call Log - Right Sidebar */}
          <div className="lg:col-span-1">
            <CallLog logs={logs} />
          </div>
        </div>
      </div>
    </div>
  );
}
