import React from 'react';
import { DotGrid } from './DotGrid';

export function CountdownScreen() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center">
      <DotGrid />
    </div>
  );
}