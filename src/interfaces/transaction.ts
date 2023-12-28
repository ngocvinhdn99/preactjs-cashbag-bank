import { IPhoto } from ".";

export interface ITransaction {
  brand: {
    logo: IPhoto;
    name: string;
    _id: string;
  };
  buy: string;
  commission: number;
  estimateCashback: string;
  orderId: string;
  status: string;
  value: number;
  _id: string;
}
