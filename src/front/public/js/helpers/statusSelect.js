export const createSelectStatus = (user, statuses) => {
    let select = $(`<select id="selectStatus"></select>`)
    for (let status of Object.keys(statuses)) {
        select.append($(`<option ${user['status'] === status ? 'selected' : ''} value="${status}">${statuses[status]}</option>`))

    }
    select.change((e) => {
        $.ajax({
            url: `http://localhost:322/api/statuses`,
            type: 'POST',
            data: JSON.stringify({status: e.target.value.toString(), userId: user['id']}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        })
    })
    return select
}
