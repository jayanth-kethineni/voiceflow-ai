import { MessageSquare } from 'lucide-react';

export default function CallLog({ logs }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 sticky top-8">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-5 h-5 text-blue-400" />
        <h2 className="text-white font-semibold">Call Flow Log</h2>
      </div>

      <div className="h-96 bg-slate-900/50 rounded-lg p-3 overflow-y-auto">
        {logs.length === 0 ? (
          <p className="text-gray-500 text-sm">No activity yet</p>
        ) : (
          <div className="space-y-3">
            {logs.map((log) => (
              <div key={log.id} className="border-l-2 border-blue-500 pl-3 py-2 text-sm">
                <div className="text-gray-300 font-mono text-xs mb-1">
                  {log.timestamp.toLocaleTimeString()}
                </div>
                
                {log.userInput && (
                  <div className="mb-2">
                    <span className="text-gray-400">Input:</span>
                    <p className="text-white font-semibold">"{log.userInput}"</p>
                  </div>
                )}

                {log.detectedIntent && (
                  <div className="mb-2">
                    <span className="text-gray-400">Intent:</span>
                    <p className="text-blue-400 font-semibold">{log.detectedIntent}</p>
                  </div>
                )}

                {log.response && (
                  <div>
                    <span className="text-gray-400">Response:</span>
                    <p className="text-gray-300 text-xs mt-1 line-clamp-2">{log.response}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-700">
        <p className="text-gray-400 text-xs">
          Total Interactions: <span className="text-white font-semibold">{logs.length}</span>
        </p>
      </div>
    </div>
  );
}
