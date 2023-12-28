import { signal } from "@preact/signals";
import { ICommonFilter, ITransaction } from "../interfaces";
import { serviceTransaction } from "../services";

const list = signal<ITransaction[]>([]);
const filter = signal<ICommonFilter>({ status: "pending", pageToken: "" });

const actionGetList = async () => {
  const response = await serviceTransaction.getList(filter.value);
  const { data, success } = response.data;

  if (!success) return;
  list.value = data?.transactions;
  filter.value = {
    ...filter.value,
    pageToken: data?.nextPageToken,
  };
};

export default { list, filter, actionGetList };
