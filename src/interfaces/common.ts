export interface IPhoto {
  _id: string;
  name?: string;
  sizes: {
    sm: {
      url: string;
    };
    md: {
      url: string;
    };
  };
}

export interface ICommonFilter {
  status?: string;
  pageToken?: string;
}
