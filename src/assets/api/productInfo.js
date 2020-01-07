/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2019-12-08 00:33:08
# FilePath: /robot/src/assets/api/productInfo.js
# Description: 
#
============================================================================= */
import {get,postQuery,postPayload,postFormdata,put,del} from '../../utils/axios'

export function TotalProduct(data){
    return postPayload('/api/ProductInfo/TotalProduct',data)
}

export function ProductDetails(data){
    return postPayload('/api/ProductInfo/ProductDetails',data)
}

export function DeviceStatusList(data){
    return get('/api/DeviceInfo/DeviceStatusList',data)
}