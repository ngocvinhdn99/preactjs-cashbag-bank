import { h } from "preact";
import { useMemo } from "preact/hooks";
import { AppConst } from "../../../configs";
import { IWithdraw } from "../../../interfaces";
import { format } from "../../../utils";

interface IProps {
  item: IWithdraw;
}

function WithdrawItem(props: IProps) {
  const { item } = props;
  const { success, pending, rejected } = AppConst.withdraw.status;

  const statusLabel = useMemo(() => {
    switch (item.status) {
      case success:
        return "Thành công";
      case pending:
        return "Đang xử lý";
      case rejected:
        return "Bị từ chối";
      default:
        return "";
    }
  }, [item.status]);

  const statusColorClassName: string = useMemo(() => {
    switch (item?.status) {
      case success:
        return "color-primary";
      case pending:
        return "color-pending";
      case rejected:
        return "color-reject";
    }
    return "";
  }, [item?.status]);

  return (
    <div
      className="flex flex-col text-sm py-5 ml-5 font-semibold"
      style={{ borderBottom: "1px solid #f5f5f5" }}
    >
      <span>{format.dateWithNoHour(item.createdAt)}</span>
      <span>Số tiền rút: {format.cashValue(item.cash)}</span>
      <span>Rút về tài khoản {item.cardNumber}</span>
      <span className={statusColorClassName}>{statusLabel}</span>
    </div>
  );
}

export default WithdrawItem;
