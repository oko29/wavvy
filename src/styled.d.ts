import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
      gray: string;
      pink: string;
      blue: string;
      darkblue: string;
    };
    size: {
      small: string;
      normal: string;
      large: string;
      xl: string;
      xxl: string;
    };
  }
}
