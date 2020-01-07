

/*********************
 *
 * @Author: 桔子桑
 * @Date: 2019-12-19 22:23:49
 * @FilePath: /robot/src/assets/api/taskassign.js
 * @Description: 文件描述
 *
*********************/


import {get,postQuery,postPayload,postFormdata} from '../../utils/axios'

export function MachineStatus(data){
    return get('/api/WorkShopOverview/MachineStatus',data)
}


export function Distributions(data){
    return postPayload('/api/WorkShopOverview/Distributions',data)
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

export function AllOrders(data){
    return postPayload('/api/CapacityEstimate/AllOrders',data)
}

export function LatestOrders(data){
    return postPayload('/api/CapacityEstimate/LatestOrders',data)
}

export function UpdateOrder(data){
    return postPayload('/api/CapacityEstimate/UpdateOrder',data)
}


export function OrderDistribution(data){
    return postPayload('/api/CapacityEstimate/OrderDistribution',data)
}


export function CancelDistribution(data){
    return postPayload('/api/CapacityEstimate/CancelDistribution',data)
}

export function NewOrder(data){
    return postPayload('/api/CapacityEstimate/NewOrder',data)
}


export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}




