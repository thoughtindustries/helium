import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface HeightEqualizerProps {
  children: ReactNode;
  /** Time to recalculate heights */
  timeout?: number;
  /** Time of animation for height change (in milliseconds) */
  animationSpeed?: number;
}

export interface HeightEqualizerSizesProps {
  name: string;
  height: number;
}

type HeightEqualizerPropsToContext = Required<Pick<HeightEqualizerProps, 'animationSpeed'>>;

export type HeightEqualizerContextType = HeightEqualizerPropsToContext & {
  sizes: HeightEqualizerSizesProps[];
  temporarySizes: HeightEqualizerSizesProps[];
  update: boolean;
  originalChildrenCount: number;
  childrenCount: number;
  setTemporarySizes: Dispatch<SetStateAction<HeightEqualizerSizesProps[]>>;
  setOriginalChildrenCount: Dispatch<SetStateAction<number>>;
  setChildrenCount: Dispatch<SetStateAction<number>>;
};

export interface HeightEqualizerElementProps {
  children?: ReactNode;
  /** all heights of elements with the same name are comparing */
  name: string;
  /** An HTML tag to be rendered as the base element wrapper. The default is `div`.  */
  as?: string;
  /** A string of classes to apply to the `div` that wraps the Shop Pay button. */
  className?: string;
}
