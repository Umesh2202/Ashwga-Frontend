import { toast } from "react-toastify";

export type ToastVariant = "success" | "error" | "info" | "warning" | "default";

/**
 * 2. The Trigger Function
 * @param message - The text to display
 * @param type - (Optional) 'success', 'error', 'info', 'warning', or 'default'
 */
const showToast = (message: string, type: ToastVariant = "default"): void => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "info":
      toast.info(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    default:
      toast(message);
  }
};

export default showToast;
