
/*********************
 *
 * @Author: 桔子桑
 * @Date: 2019-12-08 02:50:27
 * @FilePath: /robot/src/assets/api/empInfo.js
 * @Description: 员工管理模块接口配置
 *
*********************/

import {get,postQuery,postPayload,postFormdata,put,del} from '../../utils/axios'

export function EmpInfoList(data){
    return postPayload('/api/EmpInfo/EmpInfoList',data)
}

export function EmpId(data){
    return postPayload('/api/EmpInfo/EmpId',data)
}

export function updateEmp(data){
    return put('/api/EmpInfo/EmpInfo',data)
}

export function addEmp(data){
    return postPayload('/api/EmpInfo/EmpInfo',data)
}

export function deleteEmp(data){
    return del('/api/EmpInfo/EmpInfo',data)
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}

export function PositionList(data){
    return get('/api/EmpInfo/PositionList',data)
}






