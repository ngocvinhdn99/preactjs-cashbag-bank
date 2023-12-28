export interface IBankTheme {
  colors: {
    primary: string;
    bgActiveTab: string;
    white: string;
  };
  sizes: {
    headerHeight: number;
  };
  font: {
    regular: {
      name: string;
      link: string;
    };
    semibold: {
      name: string;
      link: string;
    };
    bold: {
      name: string;
      link: string;
    };
  };
  _id: string;
}
