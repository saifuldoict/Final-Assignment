import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


class FormHelper {
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
            reader.onerror = (error) => {
                reject(error);
            }

        })
    }

    SuccessMessage(message){
        toast.success(message)
    }
    ErrorMessage(message){
        toast.error(message)
    }

    IsEmpty(value){
        return value.length === 0;
    }

    DeleteAlert() {
        return MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                MySwal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
            return result; // Return the result here
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {
                return true;
            } else {
                return false;
            }
        });
    }



}

export const { getBase64, SuccessMessage, ErrorMessage, IsEmpty, DeleteAlert } = new FormHelper();