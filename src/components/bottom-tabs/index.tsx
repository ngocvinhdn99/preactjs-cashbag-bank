
// import { AppConst, ColorConst } from "@/configs";
// import { IThemeColorModel } from "@/interfaces";
// import key from "@/locales/key";
// import { navigator } from "@/utils";
// import { Tabs } from "antd";
// import classNames from "classnames";
// import "./style.less";
// import styles from "./style.css";
// import { h } from "preact";
// import { RcIconBag, RcIconOrder, RcIconSupport, RcIconWithdraw } from "../images";

// interface Props {}

// const tabs = (status: string) => {
//   const color = ColorConst.getColor();

//   return [
//     {
//       _id: "navigation-shopping",
//       name: key.shopping,
//       url: "/brand-new",
//       route: "/brand-new",
//       icon: (selected: boolean) => (
//         <RcIconBag
//           // color={selected ? themeColorModel.bankTheme.colors.primary : color.blackTab}
//         />
//       ),
//     },
//     {
//       _id: "navigation-orders",
//       name: key.transaction,
//       url: `/transaction?status=${status}`,
//       route: "/transaction",
//       icon: (selected: boolean) => (
//         <RcIconOrder
//           // color={selected ? themeColorModel.bankTheme.colors.primary : color.blackTab}
//         />
//       ),
//     },
//     {
//       _id: "navigation-withdraw",
//       name: key.withdraw,
//       url: "/withdraw",
//       route: "/withdraw",
//       icon: (selected: boolean) => (
//         <RcIconWithdraw
//           // color={selected ? themeColorModel.bankTheme.colors.primary : color.blackTab}
//         />
//       ),
//     },
//     {
//       _id: "navigation-support",
//       name: key.support,
//       url: "/support",
//       route: "/support",
//       icon: (selected: boolean) => (
//         <RcIconSupport
//           // color={selected ? themeColorModel.bankTheme.colors.primary : color.blackTab}
//         />
//       ),
//     },
//   ];
// };

// function TabBar({}: Props) {
//   const { pathname } = useLocation();
//   const intl = useIntl();

//   const status =
//     // useModel('use-transaction-list').status ||
//     AppConst.transaction.status.pending;

//   const renderTab = (tab: any, selected: boolean) => {
//     return (
//       <div id={tab._id} className="flex flex-col items-center">
//         {tab.icon(selected)}
//         <p
//           className={classNames("text-xs font-medium m-0 mt-1", {
//             [styles.selectedTabName]: selected,
//           })}
//         >
//           {intl.formatMessage({ id: tab.name })}
//         </p>
//       </div>
//     );
//   };

//   const onChangeTab = (key: string) => {
//     const url = tabs(status).find((item) => item._id === key).url;
//     navigator.pushPath(url);
//   };
//   const activeTab = tabs(status).find((tab) => tab.route === pathname)?._id;
//   return (
//     <div className={styles.tabBarContainer}>
//       <Tabs
//         activeKey={activeTab}
//         className="tabs"
//         size="large"
//         tabPosition="bottom"
//         onChange={onChangeTab}
//         tabBarStyle={{ borderBottom: "none" }}
//         centered
//       >
//         {tabs(status).map((tab) => {
//           const selected = pathname === tab.route;
//           return (
//             <Tabs.TabPane
//               className="tab"
//               tab={renderTab(tab, selected)}
//               key={tab._id}
//             />
//           );
//         })}
//       </Tabs>
//     </div>
//   );
// }

// export default TabBar;
