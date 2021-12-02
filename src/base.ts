import * as React from 'react';
import classNames from 'classnames';

import { BaseProps, ElementRef } from './types';

const defaultTag = 'div';

export const base = <E extends React.ElementType = typeof defaultTag>(
  as: BaseProps<E>['as'],
  className?: BaseProps<E>['className'] | null,
  children?: BaseProps<E>['children'] | null
) =>
  React.forwardRef((props: Omit<BaseProps<E>, 'as'>, ref: ElementRef<E>) => {
    const tag = as;
    return React.createElement(
      tag,
      { ...props, ref, className: classNames(props?.className, className) },
      ...[props?.children ?? children]
    );
  });
