import { Fragment, h } from "preact";
import { useEffect } from "preact/hooks";
import { signalTransaction } from "../../signals";
import TransactionStatistic from "./components/statistic";
import TransactionItem from "./components/transaction-item";

const Transaction = () => {
  useEffect(() => {
    if (signalTransaction.list.value.length > 0) return;
    signalTransaction.actionGetList();
  }, []);

  return (
    <div>
      <TransactionStatistic />

      <p
        className="text-xs uppercase font-semibold m-5"
        style={{ color: "#9B9FAC" }}
      >
        Lịch sử đơn hàng
      </p>

      {signalTransaction.list.value.length > 0 ? (
        <div className="bg-white">
          {signalTransaction.list.value.map((item) => (
            <TransactionItem item={item} />
          ))}
        </div>
      ) : (
        <div className="m-5">
          <div className="bg-white p-5 rounded-lg">
            <div>
              <p className="text-center text-lg font-semibold">
                Lịch sử đơn hàng đang trống
              </p>
              <p className="text-xs font-semibold">
                Dễ dàng theo dõi đơn hàng hoàn tiền
              </p>
              <div className="text-xs">
                Đơn hàng của bạn được ghi nhận sau 1-2 ngày kể từ khi thanh toán
                và hiện ra ở trang này.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transaction;
