import React, { useState } from 'react';
import { InstallationMethod } from '../types';
import { DockerIcon, PythonIcon, NpmIcon, YarnIcon, WslIcon, SourceIcon, DefaultIcon, CopyIcon, CheckIcon } from './icons';

interface InstructionCardProps {
  method: InstallationMethod;
}

const Command: React.FC<{ command: string }> = ({ command }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 bg-code-bg p-3 rounded-md font-mono text-sm text-text-secondary">
      <span className="flex-grow overflow-x-auto whitespace-pre-wrap break-all">{`$ ${command}`}</span>
      <button onClick={handleCopy} className="p-1.5 rounded-md hover:bg-border transition-colors" title="Copy command">
        {copied ? <CheckIcon className="w-4 h-4 text-green-400" /> : <CopyIcon className="w-4 h-4 text-text-secondary" />}
      </button>
    </div>
  );
};

const getIcon = (iconIdentifier: string): React.ReactNode => {
    const className = "w-7 h-7 text-accent";
    switch(iconIdentifier?.toLowerCase()) {
        case 'docker': return <DockerIcon className={className} />;
        case 'python': return <PythonIcon className={className} />;
        case 'npm': return <NpmIcon className={className} />;
        case 'yarn': return <YarnIcon className={className} />;
        case 'wsl': return <WslIcon className={className} />;
        case 'source': return <SourceIcon className={className} />;
        default: return <DefaultIcon className={className} />;
    }
}

export const InstructionCard: React.FC<InstructionCardProps> = ({ method }) => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-lg p-6 flex flex-col gap-4 transition-all hover:border-accent/70 hover:shadow-accent/10">
      <div className="flex items-center gap-4">
        {getIcon(method.icon)}
        <h3 className="text-2xl font-bold text-text-main">{method.title}</h3>
      </div>
      <p className="text-text-secondary">{method.description}</p>
      <div className="flex flex-col gap-2 mt-2">
        {method.commands.map((cmd, index) => (
          <Command key={index} command={cmd} />
        ))}
      </div>
    </div>
  );
};