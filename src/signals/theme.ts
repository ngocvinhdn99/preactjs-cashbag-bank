import { signal } from "@preact/signals";
import { IBankTheme } from "../interfaces";
import { serviceThemeColor } from "../services";

const signalInfo = signal<IBankTheme>({
  colors: {
    primary: "",
    bgActiveTab: "",
    white: "",
  },
  sizes: {
    headerHeight: 0,
  },
  font: {
    regular: {
      name: "",
      link: "",
    },
    semibold: {
      name: "",
      link: "",
    },
    bold: {
      name: "",
      link: "",
    },
  },
  _id: "",
});

const actionGetTheme = async () => {
  const response = await serviceThemeColor.getBankTheme({ theme: "mb" });
  const { data, success } = response?.data;
  if (!success) return;
  signalInfo.value = data?.result;
};

export default { signalInfo, actionGetTheme };
