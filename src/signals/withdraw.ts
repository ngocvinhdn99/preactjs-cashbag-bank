import { signal } from "@preact/signals";
import { ICommonFilter, IWithdraw } from "src/interfaces";
import { serviceWithdraw } from "src/services";

const list = signal<IWithdraw[]>([]);
const filter = signal<ICommonFilter>({ pageToken: "" });
const isLoading = signal<boolean>(false);

const actionGetList = async (query) => {
  isLoading.value = true;
  const response = await serviceWithdraw.getList(query);
  isLoading.value = false;

  const { data, success } = response.data;

  if (!success) return;

  list.value = !!query?.pageToken ? [...list.value, ...data?.list] : data?.list;

  filter.value = {
    ...query,
    pageToken: data?.nextPageToken,
  };
};

export default { list, filter, isLoading, actionGetList };
