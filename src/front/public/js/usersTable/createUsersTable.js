import {createSelectStatus} from "../helpers/statusSelect.js";
import {createRoleSelect} from "../helpers/roleSelect.js";

let statuses
$.ajax({
    async: false,
    url: 'http://localhost:322/api/statuses',
    type: 'GET',
    success: (data) => {statuses = data}
})


const createTd = (userId, data, callback = false) => {
    let td
    td = $(`<td></td>`)
    if (!callback) {
        td.click(() => {document.location.href = `http://localhost:322/users.html?userid=${userId}`})
    }
    td.append(data)
    td.click(callback)
    return td
}


export const createTable = (res) => {
    console.log(res)
    let content = ''
    for (let user of Object.values(res)) {
        const tr = $('<tr></tr>')
        tr.append(createTd(user['id'], user['id']))
        tr.append(createTd(user['id'], user['firstName']))
        tr.append(createTd(user['id'], user['lastName']))
        tr.append(createTd(user['id'], user['patronymic']))
        tr.append(createTd(user['id'], user['birthday']))
        tr.append(createSelectStatus(user, statuses))
        tr.append(createTd(user['id'], createRoleSelect(user), () => {}))

        $('#users').append(tr)
    }
}


