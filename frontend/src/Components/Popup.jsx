import { useRef, useState } from 'react';

export default function Popup({setUploadOpen, setFileInfoArr, fileInfoArr}) {
    const FileInputRef = useRef(null);

    function FileInput() {
        FileInputRef.current.click()

    }

    function onClose() {

        setUploadOpen(false)

    }

    function HandleFileChange(event) {

        const file = event.target.files[0]

        if (file) {
            console.log(file.name)
            const objecturl = URL.createObjectURL(file)
            
            const new_url_array = [...fileInfoArr, {id: Date.now(), url: objecturl, likes: 0}]
            setFileInfoArr(new_url_array)
        }


    }

    return (
        <>
            <div>
                <button onClick={FileInput}> SelectFile </button>
                <button onClick={onClose}> Close </button>
                <input type="file" 
                ref={FileInputRef}
                accept=".jpg, .jpeg, .png"
                onChange={HandleFileChange}
                style={{display:'none'}}/>

            </div>
        
        </>

    )
}