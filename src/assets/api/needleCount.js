
/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2019-12-08 00:31:52
# FilePath: /robot/src/assets/api/needleCount.js
# Description: 
#
============================================================================= */
import {get,postQuery,postPayload,postFormdata,put,del} from '../../utils/axios'

export function NeedleDistribution(data){
    return postPayload('/api/NeedleCount/NeedleDistribution',data)
}

export function NeedleRecord(data){
    return postPayload('/api/NeedleCount/NeedleRecord',data)
}

export function NeedleOverview(data){
    return postPayload('/api/NeedleCount/NeedleOverview',data)
}

export function AllNeedleRecord(data){
    return postPayload('/api/NeedleCount/AllNeedleRecord',data)
}

export function AllNeedleDistribution(data){
    return postPayload('/api/NeedleCount/AllNeedleDistribution',data)
}

export function NewNeedleRecord(data){
    return postPayload('/api/NeedleCount/NewNeedleRecord',data)
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}







