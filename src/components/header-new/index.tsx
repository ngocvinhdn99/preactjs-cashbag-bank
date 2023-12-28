import { h } from "preact";
import { signalTheme } from "../../signals";

const Header = () => {
  return (
    <div
      className="bg-white px-5 flex justify-center items-center fixed top-0 left-0 right-0"
      style={{
        height: signalTheme.signalInfo.value.sizes.headerHeight,
        borderBottom: "1px solid #f5f5f5",
      }}
    >
      <span className="text-base font-semibold">Mua sắm hoàn tiền</span>
    </div>
  );
};

export default Header;
