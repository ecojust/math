
/*********************
 *
 * @Author: 桔子桑
 * @Date: 2019-12-19 22:23:49
 * @FilePath: /robot/src/assets/api/distribute.js
 * @Description: 文件描述
 *
*********************/

import {get,postQuery,postPayload,postFormdata} from '../../utils/axios'

export function WorkerTypes(data){
    return get('/api/DistributeInfo/WorkerTypes',data)
}

export function MachineStatus(data){
    return get('/api/WorkShopOverview/MachineStatus',data)
}

export function Workers(data){
    return postPayload('/api/WorkShopOverview/Workers',data)
}

export function Distributions(data){
    return postPayload('/api/WorkShopOverview/Distributions',data)
}


