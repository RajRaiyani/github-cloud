import {GET,POST,PUT,DELETE} from './http_request';
import vars from '../../config/vars';

// ===================== User =====================

export const listFiles = async () => {
    console.log(vars.serverUrl);
    const url = `${vars.serverUrl}/api/files`;
    return GET({url});
}

export const uploadFiles = async (files) => {
    const url = `${vars.serverUrl}/api/files`;
    return POST({url,data:files,headers:{'Content-Type':'multipart/form-data'}});
}
