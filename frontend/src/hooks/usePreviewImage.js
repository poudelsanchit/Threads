import { useState } from 'react'
import { toast } from 'react-toastify';

const usePreviewImage = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
       if(file && file.type.startsWith("image/") )
       {
        const reader =  new FileReader();
        reader.onloadend=()=>{
            setImageUrl(reader.result)
        }
        reader.readAsDataURL(file);
       }
       else{
        toast('Invalid file type', {
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
        setImageUrl(null);
       }
    };
    return {imageUrl,handleImageChange}
}

export default usePreviewImage