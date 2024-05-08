import { useState,useEffect } from 'react';

import {listFiles} from '../../services/api';

function FileList(){
    const [files,setFiles] = useState([]);
    const [inputFiles,setInputFiles] = useState([]);

    useEffect(() => {
        listFiles().then((data) => {
            setFiles(data);
        });
    },[])

    function handleChange(event){
        console.log(event.target.files);
        setInputFiles(event.target.files);
    }

    function handleSubmit(){
        console.log(inputFiles);
    }

    return (
        <div className="file-list-container">
            <h1>FileList</h1>
            {
                files.map((file,index) => (
                    <div key={index} className="file-list-item">
                        <p>{file.name}</p>
                    </div>
                ))
            }
            <input  type="file" multiple onChange={handleChange}/>
            <input type="button" value="Upload" onClick={handleSubmit}/>
        </div>
    )
}

export default FileList;