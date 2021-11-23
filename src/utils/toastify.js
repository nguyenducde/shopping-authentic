import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export const toastSuccess = (string, time) => {
    toast.success(string, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: time,
        pauseOnHover: false,
    })
}
