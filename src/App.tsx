import React, { useState } from 'react';
import { CircuitBoard } from 'lucide-react';
import PatternRecognizer from './components/PatternRecognizer';
import SymbolicReasoner from './components/SymbolicReasoner';
import DecisionDisplay from './components/DecisionDisplay';
import type { PatternRecognitionResult, Decision } from './types';

function App() {
  const [recognizedPattern, setRecognizedPattern] = useState<PatternRecognitionResult | null>(null);
  const [decision, setDecision] = useState<Decision | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CircuitBoard className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Neuro-Symbolic AI System</h1>
          </div>
          <p className="text-xl text-gray-600">
            Demonstrating the integration of neural networks with symbolic reasoning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <PatternRecognizer onRecognize={setRecognizedPattern} />
          <SymbolicReasoner
            recognizedPattern={recognizedPattern}
            onDecision={setDecision}
          />
        </div>

        <DecisionDisplay decision={decision} />

        <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              This demonstration shows how modern AI systems can combine neural networks
              (for pattern recognition) with symbolic reasoning (for logical decision-making):
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>The neural component recognizes objects in the environment</li>
              <li>The symbolic reasoner applies logical rules to the recognized patterns</li>
              <li>The system combines both to make informed decisions</li>
            </ol>
            <p className="text-sm text-gray-500 mt-4">
              Note: This is a simplified simulation. Real neuro-symbolic systems involve more
              complex integration of neural networks and symbolic reasoning mechanisms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;