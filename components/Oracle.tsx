import React, { useState, useCallback } from 'react';
import { getArtisticInterpretation } from '../services/geminiService';
import { ArrowRight, Loader2 } from 'lucide-react';

export const Oracle: React.FC = () => {
  const [input, setInput] = useState('');
  const [interpretation, setInterpretation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setInterpretation(null);
    
    try {
      const result = await getArtisticInterpretation(input);
      setInterpretation(result);
    } catch (err) {
      setInterpretation("an error in the void.");
    } finally {
      setLoading(false);
    }
  }, [input]);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 bg-white text-black">
      <div className="max-w-4xl w-full">
        <label htmlFor="art-input" className="block text-xs font-bold tracking-[0.3em] uppercase mb-12 opacity-40">
          Define Art Through Your Lens
        </label>

        <form onSubmit={handleSubmit} className="relative group mb-16">
          <input
            id="art-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a concept..."
            className="w-full text-4xl md:text-6xl lg:text-7xl font-light bg-transparent border-none outline-none placeholder-gray-200 focus:placeholder-transparent p-0 m-0 tracking-tight"
            autoComplete="off"
            disabled={loading}
          />
          {/* Custom minimal cursor/underline effect only on focus if needed, but we keep it raw as per prompt */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 origin-left" />
          
          <button 
            type="submit" 
            disabled={loading || !input.trim()}
            className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 disabled:opacity-0"
          >
            {loading ? <Loader2 className="w-8 h-8 animate-spin" /> : <ArrowRight className="w-8 h-8" />}
          </button>
        </form>

        <div className="min-h-[120px]">
          {interpretation && (
            <div className="animate-smooth-appear">
              <p className="text-xl md:text-3xl leading-relaxed font-normal">
                {interpretation}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};