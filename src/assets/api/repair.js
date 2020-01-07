
/*********************
 *
 * @Author: 桔子桑
 * @Date: 2019-12-28 20:00:34
 * @FilePath: /robot/src/assets/api/repair.js
 * @Description: 文件描述
 *
*********************/
import {get,postQuery,postPayload,postFormdata} from '../../utils/axios'

export function MatainRecord(data){
    return postPayload('/api/MatainRecord/MatainRecord',data)
}

export function MaintainDetails(data){
    return postPayload('/api/MatainRecord/MaintainDetails',data)
}


export function MaintainRemarks(data){
    return postPayload('/api/MatainRecord/MaintainRemarks',data)
}


export function BadMachines(data){
    return postPayload('/api/MatainRecord/BadMachines',data)
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}







