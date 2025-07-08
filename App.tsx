import React from 'react';
import { useState, useCallback } from 'react';
import { InstallationMethod } from './types';
import { fetchReadme } from './services/githubService';
import { generateInstructions } from './services/geminiService';
import { UrlInputForm } from './components/UrlInputForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { GithubIcon } from './components/icons';

const App: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState<string>('');
  const [installationSteps, setInstallationSteps] = useState<InstallationMethod[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (url: string) => {
    if (!url) {
      setError('Please enter a GitHub repository URL.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setInstallationSteps(null);

    try {
      const readmeContent = await fetchReadme(url);
      if (!readmeContent) {
        throw new Error('Could not fetch or read the README file from the repository.');
      }
      const steps = await generateInstructions(readmeContent);
      setInstallationSteps(steps);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`An error occurred: ${err.message}`);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-text-main font-sans py-8 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <GithubIcon className="w-12 h-12 text-text-secondary" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-main">
              Repo Installer
            </h1>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Paste a GitHub repo URL to get simplified and detailed installation instructions.
          </p>
        </header>

        <main>
          <UrlInputForm
            repoUrl={repoUrl}
            setRepoUrl={setRepoUrl}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />

          <div className="mt-10">
            {isLoading && <LoadingSpinner />}
            {error && (
              <div className="bg-red-900/30 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg text-center" role="alert">
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline ml-2">{error}</span>
              </div>
            )}
            {installationSteps && <ResultsDisplay steps={installationSteps} />}
          </div>
        </main>
        
        <footer className="text-center mt-12 text-sm text-text-secondary">
            <p>Powered by Gemini and React</p>
        </footer>
      </div>
    </div>
  );
};

export default App;