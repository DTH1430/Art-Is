import React from 'react';

export interface SectionProps {
  title?: string;
  content: string | React.ReactNode;
  alignment?: 'left' | 'center' | 'right';
  isLarge?: boolean;
}

export interface OracleResponse {
  definition: string;
}

export enum ArtPhilosophy {
  MIMESIS = 'MIMESIS',
  EXPRESSION = 'EXPRESSION',
  FORMALISM = 'FORMALISM',
  CONCEPTUAL = 'CONCEPTUAL'
}