import { Fragment, h } from "preact";
import { useEffect } from "preact/hooks";
import { RcSpin, RcTabFilter } from "src/components";
import AppLoadMoreList from "src/components/loadmore-list";
import { AppConst } from "src/configs";
import { ICommonFilter } from "src/interfaces";
import { signalTransaction } from "src/signals";
import TransactionStatistic from "./components/statistic";
import TransactionItem from "./components/transaction-item";

const Transaction = () => {
  const { list, filter, isLoading, actionGetList } = signalTransaction;
  const isLoadingInit = isLoading.value && !list.value.length;

  const getList = (newFilter: ICommonFilter = {}) => {
    const filters = { ...filter.value, ...newFilter };
    actionGetList(filters);
  };

  useEffect(() => {
    if (list.value.length > 0) return;
    getList();
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

      <div className="m-5">
        <RcTabFilter
          initialValue={filter.value.status}
          options={AppConst.select.transactionStatusFilter}
          onChange={(value) => getList({ status: value })}
        />
      </div>

      {isLoadingInit && (
        <div className="flex justify-center" style={{ marginTop: 60 }}>
          <RcSpin />
        </div>
      )}

      {!isLoadingInit && (
        <Fragment>
          {list.value?.length > 0 ? (
            <AppLoadMoreList
              loading={isLoading.value}
              shouldLoadMore={!!filter.value.pageToken}
              onLoadMore={getList}
            >
              <div className="bg-white">
                {list.value.map((item) => (
                  <TransactionItem item={item} />
                ))}
              </div>
            </AppLoadMoreList>
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
                    Đơn hàng của bạn được ghi nhận sau 1-2 ngày kể từ khi thanh
                    toán và hiện ra ở trang này.
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Transaction;
