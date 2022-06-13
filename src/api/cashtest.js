import request from "../utils/request"

export const testcash = data => {
    return request({
        method: 'POST',
        url: '/charge/systemTest',
        data,
        contentType: "application/json;charset=UTF-8",
        dataType:"json",
    })
}

// export const uploadfile = data => {
//     return request({
//         method: 'POST',
//         config: { 'Content-Type': 'multipart/form-data' },
//         data,
//         responseType: 'blob',
//         url: '/api/cash/upload',
//     })
// }
