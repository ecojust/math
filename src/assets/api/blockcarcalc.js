
/*********************
 *
 * @Author: 桔子桑
 * @Date: 2019-12-28 18:06:10
 * @FilePath: /robot/src/assets/api/blockcarcalc.js
 * @Description: 文件描述
 *
*********************/
import {get,postQuery,postPayload,postFormdata} from '../../utils/axios'

export function BlockerRank(data){
    return postPayload('/api/MaintainRecords/BlockerRank',data)
}

export function BlockerRanks(data){
    return postPayload('/api/MaintainRecords/BlockerRanks',data)
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}


