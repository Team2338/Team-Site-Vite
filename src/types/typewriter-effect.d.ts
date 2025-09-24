import * as React from 'react';

declare module 'typewriter-effect' {
  export interface TypewriterState {
    elements: {
      container: HTMLDivElement;
      cursor: HTMLSpanElement;
      wrapper: HTMLDivElement;
    };
  }

  export interface TypewriterInstance {
    typeString: (str: string) => TypewriterInstance;
    deleteAll: (speed?: number) => TypewriterInstance;
    deleteChars: (amount: number) => TypewriterInstance;
    pauseFor: (ms: number) => TypewriterInstance;
    start: () => Promise<void>;
    stop: () => TypewriterInstance;
    callFunction: (cb: () => void, thisArg?: unknown) => TypewriterInstance;
  }

  export interface TypewriterOptions {
    strings?: string[];
    autoStart?: boolean;
    loop?: boolean;
    cursor?: string;
    delay?: number | { min: number; max: number };
    deleteSpeed?: number;
    devMode?: boolean;
    skipAddStyles?: boolean;
    wrapperClassName?: string;
    cursorClassName?: string;
    stringSplitter?: (text: string) => string[];
    onCreateTextNode?: (character: string) => Text;
    onRemoveNode?: (node: Node) => void;
  }

  export interface TypewriterProps {
    onInit?: (typewriter: TypewriterInstance) => void;
    options?: TypewriterOptions;
    component?: keyof JSX.IntrinsicElements;
  }

  const Typewriter: React.FC<TypewriterProps>;
  export default Typewriter;
}