import React from 'react';
import { InstallationMethod } from '../types';
import { InstructionCard } from './InstructionCard';
import { InfoIcon } from './icons';

interface ResultsDisplayProps {
  steps: InstallationMethod[];
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ steps }) => {
  if (steps.length === 0) {
    return (
      <div className="text-center p-8 bg-card rounded-lg border border-border">
        <InfoIcon className="w-12 h-12 mx-auto text-accent mb-4"/>
        <h3 className="text-xl font-semibold text-text-main">No Instructions Found</h3>
        <p className="text-text-secondary mt-2">
          The AI could not find any clear installation instructions in the repository's README file.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {steps.map((method, index) => (
        <InstructionCard key={index} method={method} />
      ))}
    </div>
  );
};