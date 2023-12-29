import { h } from "preact";
import { useMemo } from "preact/hooks";
import { format } from "src/utils";

function TransactionStatistic() {
  const explainedContent = () => (
    <div className="text-12" style={{ color: "#9b9fac" }}>
      <div>
        <span className="text-bold">Tổng số đơn hàng: </span>Tổng số đơn hàng
        bạn đã mua qua hệ thống này
      </div>

      <div>
        <span className="text-bold">Tổng chi tiêu: </span>Tổng số tiền bạn đã
        chi trả mua hàng
      </div>

      <div>
        <span className="text-bold">Tổng tiền hoàn chờ duyệt: </span>Tất cả tiền
        hoàn phát sinh từ việc mua hàng và đang chờ xác nhận từ nhãn hàng trước
        khi được rút
      </div>

      <div>
        <span className="text-bold">Tổng tiền hoàn tích lũy: </span>Tất cả số
        tiền hoàn được xác nhận mà bạn đã tích lũy từ trước đến nay
      </div>
    </div>
  );

  const statisticList = useMemo(() => {
    return [
      {
        label: "Tổng số đơn hàng",
        value: 100,
      },
      {
        label: "Tổng chi tiêu",
        value: format.cashValue(200000),
      },
      {
        label: "Tổng tiền hoàn chờ duyệt",
        value: format.cashValue(80000),
      },
      {
        label: "Tổng tiền hoàn tích luỹ",
        value: format.cashValue(2800000),
      },
    ];
  }, []);

  return (
    <div className="py-2.5 px-5 bg-white flex flex-col gap-2">
      <h3 className="text-sm font-semibold m-0">Thống kê</h3>
      {statisticList.map((s) => (
        <div className="flex justify-between">
          <h3 className="text-sm font-semibold m-0">{s.label}</h3>
          <span className="text-sm font-semibold color-primary">{s.value}</span>
        </div>
      ))}
    </div>
  );
}

export default TransactionStatistic;
