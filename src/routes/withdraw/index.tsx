import { h } from "preact";
import { useEffect } from "preact/hooks";
import { signalWithdraw } from "../../signals";
import UserCashInfo from "./components/user-cash-info";
import WithdrawItem from "./components/withdraw-item";

const Withdraw = () => {
  useEffect(() => {
    if (signalWithdraw.list.value.length > 0) return;

    signalWithdraw.actionGetList();
  }, []);

  return (
    <div>
      <UserCashInfo />

      <div className="m-5">
        <button className="w-full bg-primary color-white py-5 text-lg font-bold border-none rounded-lg">
          Rút tiền
        </button>
      </div>

      <p
        className="text-xs uppercase font-semibold m-5"
        style={{ color: "#9B9FAC" }}
      >
        Lịch sử rút tiền
      </p>

      {signalWithdraw.list.value.length > 0 ? (
        <div className="bg-white">
          {signalWithdraw.list.value.map((item) => (
            <WithdrawItem item={item} />
          ))}
        </div>
      ) : (
        <div className="m-5">
          <div className="bg-white p-5 rounded-lg">
            <div>
              <p className="text-center text-lg font-semibold">
                Lịch sử rút tiền đang trống
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdraw;
