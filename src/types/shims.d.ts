// Minimal shims for non-typed third-party packages used in this project.

declare module 'sonner' {
  import { CSSProperties, ReactNode } from 'react';
  export type ToasterProps = {
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'bottom';
    theme?: 'light' | 'dark' | 'system' | string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
  };
  export const Toaster: (props: ToasterProps) => any;
  export const toast: {
    success: (msg: string, opts?: any) => void;
    info: (msg: string, opts?: any) => void;
    error: (msg: string, opts?: any) => void;
  };
  export default Toaster;
}

declare module 'next-themes' {
  export function useTheme(): { theme?: string; setTheme: (t: string) => void };
}
