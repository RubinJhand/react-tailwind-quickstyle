import * as React from 'react';

type PolyMorphOwnProps<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;

type MergeElementProps<E extends React.ElementType, Props = {}> = Props &
  Omit<PolyMorphOwnProps<E>, keyof Props>;

export type ElementRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>['ref'];

type AsOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
};

type PolyMorphProps<
  E extends React.ElementType,
  Props = {}
> = MergeElementProps<E, Props & AsOwnProps<E>> & { ref?: ElementRef<E> };

type BaseOwnPropsWithRef = {
  className?: string;
  children?: React.ReactNode;
};

export type BaseProps<E extends React.ElementType> = PolyMorphProps<
  E,
  BaseOwnPropsWithRef
>;
