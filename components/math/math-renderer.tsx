'use client';

import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface MathRendererProps {
  children: string;
  display?: boolean;
  className?: string;
}

export function MathRenderer({ children, display = false, className = '' }: MathRendererProps) {
  try {
    if (display) {
      return <BlockMath math={children} className={className} />;
    }
    return <InlineMath math={children} className={className} />;
  } catch (error) {
    console.error('KaTeX rendering error:', error);
    return <span className="text-red-500">{children}</span>;
  }
}

// Helper component for rendering math in markdown-like content
export function MathContent({ content }: { content: string }) {
  // Split content by math delimiters: $...$ for inline, $$...$$ for block
  const parts: (string | { type: 'inline' | 'block'; math: string })[] = [];
  let lastIndex = 0;
  let inBlock = false;
  let inInline = false;
  let startIndex = -1;

  for (let i = 0; i < content.length; i++) {
    if (content[i] === '$' && content[i + 1] === '$') {
      if (inBlock) {
        // End block math
        const math = content.slice(startIndex + 2, i);
        parts.push({ type: 'block', math });
        lastIndex = i + 2;
        inBlock = false;
        i++; // Skip next $
      } else {
        // Start block math
        if (lastIndex < i) {
          parts.push(content.slice(lastIndex, i));
        }
        startIndex = i;
        inBlock = true;
        i++; // Skip next $
      }
    } else if (content[i] === '$' && !inBlock) {
      if (inInline) {
        // End inline math
        const math = content.slice(startIndex + 1, i);
        parts.push({ type: 'inline', math });
        lastIndex = i + 1;
        inInline = false;
      } else {
        // Start inline math
        if (lastIndex < i) {
          parts.push(content.slice(lastIndex, i));
        }
        startIndex = i;
        inInline = true;
      }
    }
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return (
    <div>
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return <span key={index}>{part}</span>;
        }
        return (
          <MathRenderer key={index} display={part.type === 'block'}>
            {part.math}
          </MathRenderer>
        );
      })}
    </div>
  );
}

