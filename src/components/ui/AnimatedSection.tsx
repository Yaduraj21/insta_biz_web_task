'use client';

import React, { type ReactNode } from 'react';
import { useScrollReveal } from '@/lib/useScrollAnimation';

type AnimationVariant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade';

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  threshold?: number;
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'zoom-in': {
    hidden: 'opacity-0 scale-90',
    visible: 'opacity-100 scale-100',
  },
  'fade': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
};

export function AnimatedSection({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.15,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useScrollReveal({ threshold });
  const styles = variantStyles[variant];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? styles.visible : styles.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Stagger children animations
interface StaggerContainerProps {
  children: ReactNode[];
  staggerDelay?: number;
  variant?: AnimationVariant;
  className?: string;
  childClassName?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 100,
  variant = 'fade-up',
  className = '',
  childClassName = '',
}: StaggerContainerProps) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const styles = variantStyles[variant];

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => (
        <div
          className={`transition-all duration-700 ease-out ${isVisible ? styles.visible : styles.hidden} ${childClassName}`}
          style={{ transitionDelay: `${i * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
