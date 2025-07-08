
import React from 'react';

type IconProps = {
  className?: string;
};

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
  </svg>
);

export const CopyIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M21.13,9.63l-4.25-2.2v9.14l4.25-2.2V9.63M16.88,7.43l-4.25-2.2V16.37l4.25-2.2V7.43M12.63,5.23L8.38,3.03v9.14l4.25,2.2V5.23M7.5,13.23a.88.88,0,0,0-.23.59v1.27c0,.24.08.43.23.59s.34.23.58.23.43-.08.58-.23.23-.35.23-.59V13.82a.88.88,0,0,0-.23-.59,1,1,0,0,0-.58-.23.88.88,0,0,0-.58.23m-2.1,1.86a.88.88,0,0,0-.23.59v1.27c0,.24.08.43.23.59s.34.23.58.23.43-.08.58-.23.23-.35.23-.59V15.68a.88.88,0,0,0-.23-.59,1,1,0,0,0-.58-.23.88.88,0,0,0-.58.23m-2.1,1.86a.88.88,0,0,0-.23.59v1.27c0,.24.08.43.23.59s.34.23.58.23.43-.08.58-.23.23-.35.23-.59V17.54a.88.88,0,0,0-.23-.59,1,1,0,0,0-.58-.23.88.88,0,0,0-.58.23m15-6.29c.12-.55.18-1.1.18-1.64A7.44,7.44,0,0,0,16.48,2a1.2,1.2,0,0,0-.9.41L3.05,8.19A1.73,1.73,0,0,0,2,9.63v4.74a1.73,1.73,0,0,0,1.05,1.44l4,2.25V18a2.59,2.59,0,0,0,2.57,2.57h.54a2.59,2.59,0,0,0,2.57-2.57v-.07l4.25-2.31a7.42,7.42,0,0,0,4.41-6.6Z"/></svg>
);
export const PythonIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M15,22H9a1,1,0,0,1-1-1V16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h5V5a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v5h3a1,1,0,0,1,1,1v6a1,1,0,0,1-1,1H16v3A1,1,0,0,1,15,22Zm-5-2h4V15a1,1,0,0,1,1-1h3V10H15a1,1,0,0,1-1-1V5H10v4a1,1,0,0,1-1,1H6v4h3a1,1,0,0,1,1,1Z"/></svg>
);
export const NpmIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M4,10h2V5h7v1h-6v4h6v1H6v3h2v-2h2v3h5v-1h-4v-2h4v-1h-4v-1h4V5h1v14H3V10H4Z"/></svg>
);
export const YarnIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M15.42 16.65c.53.48.89.9.89 1.45 0 .8-.56 1.2-1.4 1.2s-1.1-.19-1.46-.38l-.48 1.03c.53.3 1.27.5 2.18.5 1.7 0 2.8-1.02 2.8-2.34 0-.82-.5-1.5-1.2-2.1l-1.07-1.1c-.6-.56-.9-1.02-.9-1.52 0-.6.48-1 .9-1 .47 0 .8.14.98.26l.4-1.04c-.37-.2-.9-.4-1.58-.4-1.2 0-2.15.7-2.15 1.9 0 .7.4 1.3 1.1 1.9l.8.8zM8.58 14h2.84v5.3h1.72V14h2.84v-1.28h-7.4V14z"/></svg>
);
export const WslIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M2,3H22V5H2V3M2,7H10V9H2V7M2,11H10V13H2V11M2,15H10V17H2V15M2,19H22V21H2V19M12,7H22V17H12V7M14,9V15H20V9H14Z" /></svg>
);
export const SourceIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" /></svg>
);
export const DefaultIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
);
