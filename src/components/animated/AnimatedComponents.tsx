// Simple animated wrappers — no external dependencies required

import { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

/** Wrapper that adds a subtle fade-in slide-up on mount */
export function AnimatedItem({ children, className = '', delay = 0 }: Props) {
  return (
    <div
      className={className}
      style={{
        animation: `revealUp 0.6s ease both`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/** Container — just a passthrough div */
export function AnimatedContainer({ children, className = '' }: Props) {
  return <div className={className}>{children}</div>;
}

/** Card with hover shadow */
export function AnimatedCard({ children, className = '', delay = 0 }: Props) {
  return (
    <div
      className={className}
      style={{
        animation: `revealUp 0.6s ease both`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/** Animated reveal text — just renders the text normally */
export function AnimatedRevealText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  return <span className={className}>{text}</span>;
}
