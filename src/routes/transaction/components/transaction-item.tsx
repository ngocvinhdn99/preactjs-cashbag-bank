import { h } from "preact";
import { useMemo } from "preact/hooks";
import styles from "../style.less";
import { ITransaction } from "src/interfaces";
import { AppConst } from "src/configs";
import { format, helper } from "src/utils";
import { RcIconNextGrey } from "src/components/images";

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
        <div className="flex flex-col gap-1 text-sm">
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
    </div>
  );
}

export default TransactionItem;
