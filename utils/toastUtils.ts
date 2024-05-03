// utils/toastUtils.tsx
import { toast } from 'react-toastify';

interface ToastOptions {
  position?: 'top-right';
  autoClose?: number;
  closeOnClick?: boolean;
  hideProgressBar?: boolean;
}

const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 2000,
  closeOnClick: true,
  hideProgressBar: true,
};

export const showToast = (
  type: 'success' | 'error',
  message: string,
  options: ToastOptions = {}
) => {
  const toastOptions = { ...defaultOptions, ...options };

  if (type === 'success') {
    toast.success(message, toastOptions);
  } else if (type === 'error') {
    toast.error(message, toastOptions);
  }
};
