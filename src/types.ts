export interface PatternRecognitionResult {
  object: string;
  confidence: number;
}

export interface SymbolicRule {
  if: string;
  then: string;
  explanation: string;
}

export interface Decision {
  action: string;
  confidence: number;
  reasoning: string;
}