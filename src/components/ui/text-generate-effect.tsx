/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect } from 'react';

import { motion, stagger, useAnimate } from 'framer-motion';

import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  title = true,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  title?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0"
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div
        className={`${title ? `lg:textxl bg-gradient-to-b from-gray-50 to-gray-50 bg-clip-text text-center text-4xl font-semibold text-transparent md:text-6xl md:!leading-snug` : `mt-6 text-center text-base text-foreground/80 md:text-lg`}`}
      >
        {renderWords()}
      </div>
    </div>
  );
};
