'use client';

import { Agentation } from 'agentation';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {process.env.NODE_ENV === 'development' && <Agentation />}
    </>
  );
}
