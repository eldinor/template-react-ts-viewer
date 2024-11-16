interface HTML3DElementAttributes extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src?: string;
  env?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "babylon-viewer": HTML3DElementAttributes;
    }
  }
}
