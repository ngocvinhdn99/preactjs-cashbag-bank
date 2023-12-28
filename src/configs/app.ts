import {
  RcIconBag,
  RcIconOrder,
  RcIconSupport,
  RcIconWithdraw,
} from "../components/images";

const localStorage = {
  authToken: "authToken",
  deviceId: "device-id",
};

const select = {
  tabBarList: [
    { _id: "/brand-new", name: "Mua sắm", icon: RcIconBag },
    { _id: "/transaction", name: "Đơn hàng", icon: RcIconOrder },
    { _id: "/withdraw", name: "Rút tiền", icon: RcIconWithdraw },
    { _id: "/support", name: "Hỗ trợ", icon: RcIconSupport },
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
