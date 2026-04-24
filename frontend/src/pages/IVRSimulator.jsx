import { useState, useRef, useEffect } from 'react';
import { Phone, Send, ArrowLeft, Clock, MessageCircle } from 'lucide-react';

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
  const [isTyping, setIsTyping] = useState(false);
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
    if (!userInput.trim() || !isCallActive || isTyping) return;

    const input = userInput.trim();
    setUserInput('');

    // Add user message
    setMessages(prev => [
      ...prev,
      { type: 'user', content: input, timestamp: new Date() }
    ]);

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

    // Simulate typing delay
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 500));

    // Add system response
    setMessages(prev => [
      ...prev,
      { type: 'system', content: response.message, timestamp: new Date() }
    ]);

    setIsTyping(false);

    // If escalated, end call after 2 seconds
    if (response.intent === 'AGENT_REQUEST') {
      setTimeout(() => {
        setIsCallActive(false);
      }, 2000);
    }
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setMessages([]);
    setLogs([]);
    setCallDuration(0);
  };

  const quickAction = (action) => {
    if (!isCallActive || isTyping) return;
    setUserInput(action);
    setTimeout(() => {
      setUserInput(action);
      // Trigger send
      const input = action;
      setUserInput('');
      setMessages(prev => [
        ...prev,
        { type: 'user', content: input, timestamp: new Date() }
      ]);
      const response = detectIntent(input);
      const logEntry = {
        id: logs.length + 1,
        userInput: input,
        detectedIntent: response.intent,
        response: response.message,
        timestamp: new Date()
      };
      setLogs(prev => [...prev, logEntry]);
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { type: 'system', content: response.message, timestamp: new Date() }
        ]);
        setIsTyping(false);
        if (response.intent === 'AGENT_REQUEST') {
          setTimeout(() => {
            setIsCallActive(false);
          }, 2000);
        }
      }, 1000 + Math.random() * 500);
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-slate-800/80 backdrop-blur border-b border-blue-500/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <h1 className="text-2xl font-bold text-white">IVR Simulator</h1>
          <div className="flex items-center gap-2 text-blue-400">
            <Clock className="w-5 h-5" />
            <span className="font-mono">{formatTime(callDuration)}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-6 p-6 max-w-7xl mx-auto w-full">
        {/* Chat Section */}
        <div className="flex-1 flex flex-col">
          {/* Call Status */}
          <div className="bg-slate-800/60 border border-blue-500/20 rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isCallActive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-white font-semibold">
                {isCallActive ? '🟢 Call Connected' : '🔴 Call Ended'}
              </span>
            </div>
            <span className="text-gray-400 font-mono text-lg">{formatTime(callDuration)}</span>
          </div>

          {/* Chat Container */}
          <div className="flex-1 bg-slate-800/40 rounded-lg border border-blue-500/20 p-6 flex flex-col mb-6 min-h-96">
            {!isCallActive && messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full">
                <Phone className="w-16 h-16 text-blue-500/50 mb-4" />
                <p className="text-gray-400 text-center mb-6 text-lg">No active call</p>
                <button
                  onClick={handleStartCall}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Start Call
                </button>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-sm px-4 py-3 rounded-lg ${
                          msg.type === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-slate-700 text-gray-100 rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                        <p className="text-xs mt-2 opacity-70">{msg.timestamp.toLocaleTimeString()}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-slate-700 text-gray-100 px-4 py-3 rounded-lg rounded-bl-none">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                {isCallActive && messages.length > 0 && !isTyping && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <button
                      onClick={() => quickAction('1')}
                      className="bg-slate-700 hover:bg-slate-600 text-white py-2 px-3 rounded text-sm transition font-medium"
                    >
                      💰 Balance
                    </button>
                    <button
                      onClick={() => quickAction('2')}
                      className="bg-slate-700 hover:bg-slate-600 text-white py-2 px-3 rounded text-sm transition font-medium"
                    >
                      📊 Transactions
                    </button>
                    <button
                      onClick={() => quickAction('agent')}
                      className="bg-slate-700 hover:bg-slate-600 text-white py-2 px-3 rounded text-sm transition font-medium"
                    >
                      👤 Agent
                    </button>
                  </div>
                )}

                {/* Input Section */}
                {isCallActive && (
                  <>
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendInput()}
                        placeholder="Type: 1, 2, or 'agent'"
                        disabled={isTyping}
                        className="flex-1 bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none disabled:opacity-50"
                      />
                      <button
                        onClick={handleSendInput}
                        disabled={!userInput.trim() || isTyping}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-4 py-3 rounded-lg transition flex items-center gap-2 disabled:cursor-not-allowed"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>

                    {/* End Call Button */}
                    <button
                      onClick={handleEndCall}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition"
                    >
                      End Call
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Call Log Panel */}
        <div className="w-80 bg-slate-800/40 rounded-lg border border-blue-500/20 p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-blue-500/20">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <h2 className="font-bold text-white">Call Log</h2>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-2">
            {logs.length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-8">No activity yet</p>
            ) : (
              logs.map((log, idx) => (
                <div key={idx} className="bg-slate-700/50 rounded p-3 text-xs border-l-2 border-blue-500">
                  <p className="text-gray-400 mb-1">{log.timestamp.toLocaleTimeString()}</p>
                  <p className="text-blue-300 font-semibold mb-1">Input: {log.userInput}</p>
                  <p className="text-green-300 text-xs mb-1">Intent: {log.detectedIntent}</p>
                  <p className="text-gray-300 break-words text-xs">Response: {log.response}</p>
                </div>
              ))
            )}
          </div>

          {/* Stats */}
          {logs.length > 0 && (
            <div className="mt-4 pt-4 border-t border-blue-500/20">
              <p className="text-gray-400 text-xs">
                Total Interactions: <span className="text-blue-300 font-bold">{logs.length}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
