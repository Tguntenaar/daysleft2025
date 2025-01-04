import React from 'react';
import { Github, Twitter } from 'lucide-react';

export function Header() {
  return (
    <header className="p-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">2025</h1>
      <div className="flex gap-4">
        <a href="https://twitter.com/yourusername" className="hover:text-gray-400 transition-colors">
          <Twitter size={24} />
        </a>
        <a href="https://github.com/yourusername" className="hover:text-gray-400 transition-colors">
          <Github size={24} />
        </a>
      </div>
    </header>
  );
}