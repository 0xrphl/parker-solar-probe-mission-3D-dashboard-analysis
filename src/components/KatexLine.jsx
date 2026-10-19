import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

/**
 * KatexLine: renders a LaTeX string inline or block.
 * Falls back to raw text on parse error.
 */
export const KatexLine = ({ tex, block = false, className = '' }) => {
  if (!tex) return null;
  try {
    return block
      ? <div className={`my-1 overflow-x-auto ${className}`}><BlockMath math={tex} /></div>
      : <span className={className}><InlineMath math={tex} /></span>;
  } catch {
    return <code className={`text-solar-gold font-mono text-xs ${className}`}>{tex}</code>;
  }
};
