
/*********************
 *
 * @Author: 桔子桑
 * @Date: 2019-12-19 22:23:49
 * @FilePath: /robot/src/assets/api/distribute.js
 * @Description: 文件描述
 *
*********************/
const config = window.config;


import {get,postQuery,postPayload,postFormdata} from '../../utils/axios'

export function WorkerTypes(data){
    return get('/api/DistributeInfo/WorkerTypes',data)
}

export function Workers(data){
    return postPayload('/api/DistributeInfo/Workers',data)
}



export function Distributions(data){
    return postPayload('/api/DistributeInfo/Distributions',data)
}

export function CancelDistributions(data){
    return postPayload('/api/DistributeInfo/CancelDistributions',data)
}

export function MachineStatus(data){
    return get('/api/WorkShopOverview/MachineStatus',data)
}



export function singlemachineinfo(data){
    return postPayload('/api/MachineInfo/singlemachineinfo',data)
}

export function SubMachineStatus(data){
    return get('/api/WorkShopOverview/SubMachineStatus',data)
}

export function UnSubMachineStatus(data){
    return get('/api/WorkShopOverview/UnSubMachineStatus',data)
}

export function workshopoverview(){
    return config.api + '/workshopoverview'
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}


