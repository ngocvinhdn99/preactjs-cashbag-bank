import { IPhoto } from "../interfaces";

const getPhotoURL = (photo: IPhoto, size: "sm" | "md" = "sm"): string => {
  return photo?.sizes?.[size]?.url || "";
};

export default {
  getPhotoURL,
};
