import { toast } from "react-hot-toast";

export function errorToast(message) {
  toast.error(message, {
    style: {
      border: "1px solid #ff5b24",
      padding: "16px",
      color: "#ff5b24",
    },
    iconTheme: {
      primary: "#ff5b24",
      secondary: "#FFFAEE",
    },
  });
}

export function successToast(message) {
  toast.success(message, {
    style: {
      border: "1px solid #089c0d",
      padding: "16px",
      color: "#089c0d",
    },
    iconTheme: {
      primary: "#089c0d",
      secondary: "#FFFAEE",
    },
  });
}
