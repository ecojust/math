
/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2019-12-07 19:52:42
# FilePath: /robot/src/assets/api/deviceInfo.js
# Description: 设备信息模块接口配置
#
============================================================================= */

import {get,postQuery,postPayload,postFormdata} from '../../utils/axios'

export function SingleDeviceBelongs(data){
    return postPayload('/api/DeviceInfo/SingleDeviceBelongs',data)
}

export function SingleDeviceInfo(data){
    return postPayload('/api/DeviceInfo/SingleDeviceInfo',data)
}

export function SingleDeviceStatus(data){
    return postPayload('/api/DeviceInfo/SingleDeviceStatus',data)
}

export function SingleDeviceDetailInfo(data){
    return postPayload('/api/DeviceInfo/SingleDeviceDetailInfo',data)
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}

