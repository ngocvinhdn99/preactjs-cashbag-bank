import { h } from "preact";
import { useMemo } from "preact/hooks";
import { RcIconNextGrey } from "../../../components/images";
import { AppConst } from "../../../configs";
import { ITransaction } from "../../../interfaces";
import { format, helper } from "../../../utils";
import styles from "../style.css";

interface IProps {
  item: ITransaction;
}

function TransactionItem(props: IProps) {
  const { item } = props;
  const { approved, pending, cashback, rejected } = AppConst.transaction.status;

  const cashbackTitle: string = useMemo(() => {
    switch (item?.status) {
      case pending:
      case approved:
        return "Hoàn tiền dự kiến";
      case cashback:
        return "Hoàn tiền";
      case rejected:
        return "Đơn hàng đã hủy";
    }
    return "";
  }, [item?.status]);

  const statusColorClassName: string = useMemo(() => {
    switch (item?.status) {
      case pending:
      case approved:
        return "color-pending";
      case cashback:
        return "color-primary";
      case rejected:
        return "color-reject";
    }
    return "";
  }, [item?.status]);

  return (
    <div className="flex items-center">
      <div className={styles.brandLogoContainer}>
        <img src={helper.getPhotoURL(item.brand.logo)} />
      </div>

      <div className={styles.transactionInfoContainer}>
        <span>Giá trị: {format.cashValue(item.value)}</span>
        <span>Ngày mua: {format.dateWithNoHour(item.buy)}</span>
        <span className={statusColorClassName}>
          {cashbackTitle}
          {item.status !== "rejected" &&
            `: ${format.cashValue(item.commission)}`}
        </span>
      </div>

      <div className="px-5">
        <RcIconNextGrey />
      </div>
    </div>
  );
}

export default TransactionItem;
