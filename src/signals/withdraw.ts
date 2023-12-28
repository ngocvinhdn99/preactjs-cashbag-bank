import { signal } from "@preact/signals";
import { ICommonFilter, IWithdraw } from "../interfaces";
import { serviceWithdraw } from "../services";

const list = signal<IWithdraw[]>([]);
const filter = signal<ICommonFilter>({ pageToken: "" });

const actionGetList = async () => {
  const response = await serviceWithdraw.getList(filter.value);
  const { data, success } = response.data;

  if (!success) return;
  list.value = data?.list;
  filter.value = {
    ...filter.value,
    pageToken: data?.nextPageToken,
  };
};

export default { list, filter, actionGetList };
