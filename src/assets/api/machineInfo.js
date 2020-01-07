
/*********************
 *
 * @Author: 桔子桑
 * @Date: 2019-12-08 02:50:27
 * @FilePath: /robot/src/assets/api/machineInfo.js
 * @Description: 文件描述
 *
*********************/
import {get,postQuery,postPayload,postFormdata,put,del} from '../../utils/axios'

export function Devices(data){
    return put('/api/MachineInfo/Devices',data)
}

export function singlemachineinfo(data){
    return postPayload('/api/MachineInfo/singlemachineinfo',data)
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}