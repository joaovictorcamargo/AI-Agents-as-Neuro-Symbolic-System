import React from 'react';
import { LightbulbIcon } from 'lucide-react';
import type { Decision } from '../types';

interface Props {
  decision: Decision | null;
}

export default function DecisionDisplay({ decision }: Props) {
  if (!decision) return null;

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <LightbulbIcon className="w-6 h-6 text-green-600" />
        <h2 className="text-xl font-semibold text-gray-800">Final Decision</h2>
      </div>
      <div className="space-y-4">
        <div className="bg-white/50 rounded-lg p-4">
          <div className="mb-3">
            <span className="text-sm text-gray-500">Action:</span>
            <p className="text-lg font-semibold text-gray-800">{decision.action}</p>
          </div>
          <div className="mb-3">
            <span className="text-sm text-gray-500">Confidence:</span>
            <div className="mt-1 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${decision.confidence * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-600">
              {(decision.confidence * 100).toFixed(1)}%
            </span>
          </div>
          <div>
            <span className="text-sm text-gray-500">Reasoning:</span>
            <p className="text-gray-700 mt-1">{decision.reasoning}</p>
          </div>
        </div>
      </div>
    </div>
  );
}