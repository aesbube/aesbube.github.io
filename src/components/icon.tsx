import { IconButton, type IconButtonProps } from '@mui/material';
import { forwardRef } from 'react';

type Props = IconButtonProps & {
  href?: string;
};

const Icon = forwardRef<HTMLButtonElement, Props>(
  ({ children, href, ...props }, ref) => {
    return (
      <IconButton
        ref={ref}
        component={href ? 'a' : 'button'}
        href={href}
        target={href ? '_blank' : undefined}
        {...props}
      >
        {children}
      </IconButton>
    );
  }
);

export default Icon;
