import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;
    colors: {
      green: string;
      darkGreen: string;
      lightGreen: string;

      heading: string;
      darkBody: string;
      lightBody: string;

      background: string;
      primary: string;
      secondary: string;

      black: string;
      white: string;
      gray: string;

      blue: string;
      lightBlue: string;

      red: string;
      lightRed: string;
      darkRed: string;

    };
    fonts: {
      heading: string;
      text: string;
      complement: string;
    },
  }
}
