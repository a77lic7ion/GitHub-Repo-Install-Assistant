import React from 'react';
import { ArrowRightIcon } from './icons';

interface UrlInputFormProps {
  repoUrl: string;
  setRepoUrl: (url: string) => void;
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

export const UrlInputForm: React.FC<UrlInputFormProps> = ({ repoUrl, setRepoUrl, onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(repoUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl mx-auto">
      <input
        type="url"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        placeholder="https://github.com/owner/repository"
        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition duration-200 text-text-main placeholder-text-secondary"
        disabled={isLoading}
        aria-label="GitHub Repository URL"
      />
      <button
        type="submit"
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-background font-semibold rounded-lg shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:scale-100"
        disabled={isLoading}
      >
        <span>{isLoading ? 'Analyzing...' : 'Analyze'}</span>
        {!isLoading && <ArrowRightIcon className="w-5 h-5" />}
      </button>
    </form>
  );
};