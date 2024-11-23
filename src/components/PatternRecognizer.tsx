import React from 'react';
import { Brain } from 'lucide-react';
import type { PatternRecognitionResult } from '../types';

interface Props {
  onRecognize: (result: PatternRecognitionResult) => void;
}

const SIMULATED_OBJECTS = [
  { object: 'car', confidence: 0.92 },
  { object: 'pedestrian', confidence: 0.88 },
  { object: 'traffic_light', confidence: 0.95 },
  { object: 'stop_sign', confidence: 0.91 },
];

export default function PatternRecognizer({ onRecognize }: Props) {
  const handleRecognize = () => {
    const result = SIMULATED_OBJECTS[Math.floor(Math.random() * SIMULATED_OBJECTS.length)];
    onRecognize(result);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Brain className="w-6 h-6 text-purple-600" />
        <h2 className="text-xl font-semibold text-gray-800">Neural Pattern Recognition</h2>
      </div>
      <p className="text-gray-600 mb-4">
        Simulates the neural network component that recognizes objects in the environment.
      </p>
      <button
        onClick={handleRecognize}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Recognize Object
      </button>
    </div>
  );
}