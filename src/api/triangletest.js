import request from "../utils/request"

export const testtriangle = data => {
    return request({
        method: 'POST',
        url: '/triangle/batchTest',
        data,
        contentType: "application/json;charset=UTF-8",
        dataType:"json",
    })
}