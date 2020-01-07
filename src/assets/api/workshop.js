
/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2019-12-09 21:43:04
# FilePath: /robot/src/assets/api/workshop.js
# Description: 
#
============================================================================= */

const config = window.config;


import {get,postQuery,postPayload,postFormdata} from '../../utils/axios'

export function MachineStatus(data){
    return get('/api/WorkShopOverview/MachineStatus',data)
}

export function PlanEachMachine(data){
    return postPayload('/api/WorkShopOverview/PlanEachMachine',data)
}

export function MachineBroken(data){
    return postPayload('/api/WorkShopOverview/MachineBroken',data)
}

export function MachineMaintain(data){
    return postPayload('/api/WorkShopOverview/MachineMaintain',data)
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

export function EmpId(data){
    return postPayload('/api/EmpInfo/EmpId',data)
}

export function workshopoverview(){
    return config.api + '/workshopoverview'
}

export function Devices(){
    return config.api + '/api/MachineInfo/Devices'
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}


