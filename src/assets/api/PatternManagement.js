
/*********************
 *
 * @Author: 桔子桑
 * @Date: 2020-01-01 22:32:52
 * @FilePath: /robot/src/assets/api/PatternManagement.js
 * @Description: 文件描述
 *
*********************/
import {get,postQuery,postPayload,postFormdata,put,del} from '../../utils/axios'
const config = window.config;

export function CreatePatternFile(data){
    return config.api + '/api/PatternManagement/CreatePatternFile'
}


export function GetPatternFile(data){
    return postPayload('/api/PatternManagement/PatternFile',data)
}

export function DelPatternFile(data){
    return del('/api/PatternManagement/PatternFile',data)
}


export function Distribution(data){
    return postPayload('/api/PatternManagement/Distribution',data)
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}

