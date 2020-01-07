
/*********************
 *
 * @Author: 桔子桑
 * @Date: 2020-01-01 22:32:20
 * @FilePath: /robot/src/assets/api/ProcessParametersManager.js
 * @Description: 文件描述
 *
*********************/
import {get,postQuery,postPayload,postFormdata,put,del} from '../../utils/axios'
const config = window.config;


export function CreateProcessFile(data){
    return config.api + '/api/ProcessParametersManager/CreateProcessFile';
}

export function GetProcessFile(data){
    return postPayload('/api/ProcessParametersManager/ProcessFile',data)
}

export function DelProcessFile(data){
    return del('/api/ProcessParametersManager/ProcessFile',data)
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}


