const date = (value: string) => {
  if (!value) {
    return "";
  }
  const d = new Date(value);
  const year = d.getFullYear();
  const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  const h = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
  const m = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();

  const s = `${date}-${month}-${year}, ${h}:${m}`;
  return s;
};

const dateWithNoHour = (value: string) => {
  if (!value) {
    return "";
  }
  const d = new Date(value);
  const year = d.getFullYear();
  const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  +1;
  const date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  return `${date}/${month}/${year}`;
};

const cashValue = (
  value: number | undefined,
  currentFormat: { style: string; unit: string } = {
    style: "vi-VI",
    unit: "VND",
  }
): string => {
  if (!value) {
    return "0 ₫";
  }

  // format theo props currentFormat
  return new Intl.NumberFormat(currentFormat.style, {
    style: "currency",
    currency: currentFormat.unit,
  }).format(value);
};

export default { cashValue, date, dateWithNoHour };
