export const createRoleSelect = (user) => {
    const select = $(`<select id="selectAdmin"></select>`)
    select.append($(`<option ${user['isAdministrator'] ? 'selected' : ''} value="administrator">Администратор</option>`))
    select.append($(`<option ${!user['isAdministrator'] ? 'selected' : ''} value="bedolaga">Бедолага</option>`))
    select.change((e) => {
        $.ajax({
            url: `http://localhost:322/api/users/role`,
            type: 'POST',
            data: JSON.stringify({role: e.target.value, userId: user['id']}),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        })
    })
    return select
}