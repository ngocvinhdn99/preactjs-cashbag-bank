import {
  RcIconBag,
  RcIconOrder,
  RcIconSupport,
  RcIconWithdraw,
} from "src/components/images";
import { key } from "src/locales";

const localStorage = {
  authToken: "authToken",
  deviceId: "device-id",
};

const select = {
  tabBarList: [
    { _id: "/brand-new", name: key.shopping, icon: RcIconBag },
    { _id: "/transaction", name: key.transaction, icon: RcIconOrder },
    { _id: "/withdraw", name: key.withdraw, icon: RcIconWithdraw },
    { _id: "/support", name: key.withdraw, icon: RcIconSupport },
  ],
  transactionStatusFilter: [
    { _id: "pending", name: key.transactionStatus.pending },
    { _id: "cashback", name: key.transactionStatus.cashback },
    { _id: "rejected", name: key.transactionStatus.rejected },
  ],
};

// transaction
const transaction = {
  status: {
    buy: "buy",
    pending: "pending",
    approved: "approved",
    cashback: "cashback",
    rejected: "rejected",
  },
};

const withdraw = {
  status: {
    success: "success",
    pending: "pending",
    rejected: "rejected",
  },
};

export default {
  localStorage,
  select,
  transaction,
  withdraw,
};
