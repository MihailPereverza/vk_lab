export const createNewsTable = (friends, news) => {
    const table = $('#news')
    console.log(Object.values(news))
    let posts = Object.values(news).sort((a, b) => {
        a = a['date'].split('-')
        b = b['date'].split('-')
        return new Date(a[4], a[3], a[2], a[1], a[0]) - new Date(b[4], b[3], b[2], b[1], b[0])
    })
    console.log(posts)
    for (let post of posts) {
        const tr = $('<tr></tr>')
        tr.append($(`<td>${post['postId']}</td>`))
        tr.append($(`<td>${post['date']}</td>`))

        const friend = friends[post['userId']]
        const friendText = `${friend['firstName']} ${friend['lastName']}`
        tr.append($(`<td>${friendText}</td>`))
        tr.click(() => {window.document.location = `http://localhost:322/users.html?userid=${post['userId']}`})

        tr.append($(`<td>${post['text']}</td>`))
        table.append(tr)
    }
}