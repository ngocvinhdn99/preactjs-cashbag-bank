import { h } from "preact";
import {
  RcIconCash,
  RcIconPendingCash,
  RcIconWithdraw,
} from "src/components/images";
import { signalTheme } from "src/signals";
import { format } from "src/utils";

function UserCashInfo() {
  const { white: whiteColor, primary: primaryColor } =
    signalTheme.signalInfo.value.colors;

  return (
    <div>
      <div className="flex items-center gap-4 bg-primary color-white p-5">
        <RcIconCash color={whiteColor} />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Tiền hoàn được rút</span>
          <span className="text-xl font-bold">{format.cashValue(2000000)}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-white color-primary p-5">
        <RcIconWithdraw color={primaryColor} />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Tiền hoàn đã rút</span>
          <span className="text-xl font-bold">{format.cashValue(800000)}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-white color-primary p-5">
        <RcIconPendingCash color={primaryColor} />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Tiền hoàn chờ duyệt</span>
          <span className="text-xl font-bold">{format.cashValue(2800000)}</span>
        </div>
      </div>
    </div>
  );
}

export default UserCashInfo;
