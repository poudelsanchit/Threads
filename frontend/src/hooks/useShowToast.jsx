import React from 'react'
import { useToast } from 'react-toastify'

const useShowToast = () => {
    const toast = useToast()
    const showToast = (title)=>{
        toast(title, {
            style: { fontSize: '14px' },
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    return showToast;
}

export default useShowToast