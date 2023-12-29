import { signal } from "@preact/signals";
import { ICommonFilter, ITransaction } from "src/interfaces";
import { serviceTransaction } from "src/services";

const list = signal<ITransaction[]>([]);
const filter = signal<ICommonFilter>({ status: "pending", pageToken: "" });
const isLoading = signal<boolean>(false);

const actionGetList = async (query) => {
  isLoading.value = true;
  const response = await serviceTransaction.getList(query);
  isLoading.value = false;

  const { data, success } = response.data;

  if (!success) return;
  list.value = !!query?.pageToken
    ? [...list.value, ...data?.transactions]
    : data?.transactions;

  filter.value = {
    ...query,
    pageToken: data?.nextPageToken,
  };
};

export default { list, filter, isLoading, actionGetList };
