import React from 'react';
import { TextSection } from './components/TextSection';
import { Oracle } from './components/Oracle';

const App: React.FC = () => {
  return (
    <main className="w-full bg-white text-black selection:bg-black selection:text-white pb-32">
      {/* Navigation / Brand - Absolute minimalist */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 mix-blend-difference z-50 pointer-events-none">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-white mix-blend-difference">
          Manifesto 01
        </span>
      </nav>

      {/* Hero Section */}
      <TextSection 
        content={
          <span className="block">
            WHAT<br />
            IS<br />
            ART?
          </span>
        } 
        isLarge 
      />

      {/* Philosophy 1: Mimesis */}
      <TextSection 
        title="01 — Mimesis"
        alignment="right"
        content="Art is the mirror. It does not create; it reflects. It captures the shadow of reality and holds it still for us to examine."
      />

      {/* Philosophy 2: Expression */}
      <TextSection 
        title="02 — Expression"
        alignment="left"
        content="A scream in silence. It is not what is seen, but what is felt. The externalization of the internal chaos."
      />

      {/* Philosophy 3: Formalism */}
      <TextSection 
        title="03 — Form"
        alignment="center"
        content={
          <>
            Line.<br/>
            Shape.<br/>
            Color.<br/>
            Void.
          </>
        }
        isLarge
      />

      <TextSection 
        alignment="center"
        content="It needs no meaning to exist. It simply is."
      />

      {/* Philosophy 4: Institutional */}
      <TextSection 
        title="04 — Context"
        alignment="left"
        content="Art is whatever the gallery says it is. A urinal, a shark, a blank canvas. The frame defines the work."
      />

      {/* Interactive Oracle Section */}
      <Oracle />

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 lg:px-24 py-12 flex justify-between items-end">
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-30">
          (C) XXXX / NULL
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 text-right">
          Index<br/>
          About<br/>
          Void
        </div>
      </footer>
    </main>
  );
};

export default App;