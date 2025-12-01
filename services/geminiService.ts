import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getArtisticInterpretation = async (concept: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a minimalist art philosopher. Define or interpret the concept of "${concept}" specifically in the context of "What is Art?". 
      
      Constraints:
      1. Be profound, abstract, and radically concise.
      2. Max 2 sentences.
      3. Use lowercase only, except for the concept name itself.
      4. No fluff, no "Art is...", just the raw interpretation.
      
      Example input: "Silence"
      Example output: "the loudest canvas, where the absence of noise forces the viewer to confront their own internal chaos."`,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "the machine remains silent; try another concept.";
  }
};