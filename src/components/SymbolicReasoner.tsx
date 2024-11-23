import React from 'react';
import { Code2 } from 'lucide-react';
import type { PatternRecognitionResult, SymbolicRule, Decision } from '../types';

interface Props {
  recognizedPattern: PatternRecognitionResult | null;
  onDecision: (decision: Decision) => void;
}

const RULES: SymbolicRule[] = [
  {
    if: 'traffic_light',
    then: 'check_light_color',
    explanation: 'When a traffic light is detected, the system must determine its color state'
  },
  {
    if: 'stop_sign',
    then: 'stop_vehicle',
    explanation: 'When a stop sign is detected, the vehicle must come to a complete stop'
  },
  {
    if: 'pedestrian',
    then: 'reduce_speed',
    explanation: 'When a pedestrian is detected, reduce speed and prepare to stop if needed'
  },
  {
    if: 'car',
    then: 'maintain_safe_distance',
    explanation: 'When another vehicle is detected, maintain a safe following distance'
  }
];

export default function SymbolicReasoner({ recognizedPattern, onDecision }: Props) {
  React.useEffect(() => {
    if (recognizedPattern) {
      const matchingRule = RULES.find(rule => rule.if === recognizedPattern.object);
      if (matchingRule) {
        onDecision({
          action: matchingRule.then,
          confidence: recognizedPattern.confidence,
          reasoning: matchingRule.explanation
        });
      }
    }
  }, [recognizedPattern, onDecision]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Code2 className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Symbolic Reasoning Engine</h2>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600">
          Applies logical rules to the recognized patterns to make decisions.
        </p>
        <div className="bg-white/50 rounded-lg p-4">
          <h3 className="font-medium text-gray-700 mb-2">Active Rules:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {RULES.map((rule, index) => (
              <li key={index} className="flex gap-2">
                <span className="font-mono">IF {rule.if} → THEN {rule.then}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}