import * as React from 'react';
import { classNames } from './classnames';

import { BaseProps, ElementRef } from './types';

const defaultTag = 'div';

type Box = <E extends React.ElementType = typeof defaultTag>(
  props: BaseProps<E>
) => React.ReactElement | null;

export const Box: Box = React.forwardRef(
  <E extends React.ElementType = typeof defaultTag>(
    { as, className, children, ...restProps }: BaseProps<E>,
    ref?: ElementRef<E>
  ) => {
    const Component = as || defaultTag;

    return (
      <Component {...restProps} className={classNames(className)} ref={ref}>
        {children}
      </Component>
    );
  }
);
