import { Fragment, h } from "preact";
import { useEffect } from "preact/hooks";
import { RcSpin } from "src/components";
import AppLoadMoreList from "src/components/loadmore-list";
import { ICommonFilter } from "src/interfaces";
import { signalWithdraw } from "src/signals";
import UserCashInfo from "./components/user-cash-info";
import WithdrawItem from "./components/withdraw-item";

const Withdraw = () => {
  const { list, filter, isLoading, actionGetList } = signalWithdraw;
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

      {isLoadingInit && (
        <div className="flex justify-center">
          <RcSpin />
        </div>
      )}

      {!isLoadingInit && (
        <Fragment>
          {list.value.length > 0 ? (
            <AppLoadMoreList
              loading={isLoading.value}
              shouldLoadMore={!!filter.value.pageToken}
              onLoadMore={getList}
            >
              <div className="bg-white">
                {list.value.map((item) => (
                  <WithdrawItem item={item} />
                ))}
              </div>
            </AppLoadMoreList>
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
        </Fragment>
      )}
    </div>
  );
};

export default Withdraw;
