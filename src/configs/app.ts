import { RcIconBag, RcIconOrder, RcIconSupport, RcIconWithdraw } from "../components/images";
import { key } from "../locales";

const localStorage = {
  authToken: "authToken",
  deviceId: "device-id",
};



const select = {
  tabBarList: [
    { _id: "/brand-new", name: 'Mua sắm', icon: RcIconBag },
    { _id: "/transaction", name: 'Đơn hàng', icon: RcIconOrder },
    { _id: "/withdraw", name: 'Rút tiền', icon: RcIconWithdraw },
    { _id: "/support", name: 'Hỗ trợ', icon: RcIconSupport },
  ],
};

export default {
  localStorage,
  select,
};
