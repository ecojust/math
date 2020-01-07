
/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2019-12-07 17:39:36
# FilePath: /robot/src/assets/api/system.js
# Description: 系统管理模块接口配置
#
============================================================================= */

import {get,postQuery,postPayload,postFormdata} from '../../utils/axios'

export function login(data){
    return postPayload('/api/LogIn/LogIn',data)
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}

