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

      {/* Philosophy 5: Symbolism */}
      <TextSection 
        title="05 — Symbolism"
        alignment="right"
        content="The visible sign of an invisible reality. Not the object itself, but the echo it leaves in the mind."
      />

      {/* Philosophy 6: Conceptual */}
      <TextSection 
        title="06 — Conceptual"
        alignment="left"
        content="The idea becomes the machine that makes the art. The execution is perfunctory. The thought alone is the masterpiece."
      />

      {/* Philosophy 7: Aestheticism */}
      <TextSection 
        title="07 — Aestheticism"
        alignment="right"
        content="Art for art's sake. It serves no moral, political, or didactic purpose. Beauty is its own justification."
      />

      {/* Philosophy 8: Existentialism */}
      <TextSection 
        title="08 — Existentialism"
        alignment="left"
        content="In a meaningless universe, creation is the only authentic act. We define ourselves by what we make."
      />

      {/* Philosophy 9: Surrealism */}
      <TextSection 
        title="09 — Surrealism"
        alignment="right"
        content="The liberation of the unconscious. Dreams, chance, and madness intertwined. Reality is a fragile illusion."
      />
      {/* Philosophy 10: Intuition */}
      <TextSection 
        title="10 — Intuition"
        alignment="left"
        content="A flash of pure understanding. It bypasses logic and reason to strike directly at the soul. Immediate knowledge."
      />
      {/* The Oracle - Interactive Section */}
      <Oracle />

    </main>
  );
};

export default App;