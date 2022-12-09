import {createTable} from "./usersTable/createUsersTable.js";
import {createNewsTable} from "./newsTable/createNewsTable.js";
import {createRoleSelect} from "./helpers/roleSelect.js";
import {createSelectStatus} from "./helpers/statusSelect.js";
import {setStatuses} from "./helpers/setStatuses.js";
import '../less/users.less'


$('#back-button').click(() => {window.document.location = 'http://localhost:322/'})

let url = new URL(document.location.href)
const userId = url.searchParams.get('userid')
let user, statuses
setStatuses((data) => {statuses = data})
console.log(statuses)
$.ajax({
    async: false,
    url: `http://localhost:322/api/users/${userId}`,
    type: 'GET',
    success: (data) => {
        user = data
    }
})
$('#userName').append(`Профиль: ${user['lastName']} ${user['firstName']}`)
$('#role').append(createRoleSelect(user))
$('#status').append(createSelectStatus(user, statuses))

let friends
$.ajax({
    async: false,
    url: `http://localhost:322/api/users/friends/${userId}`,
    type: 'GET',
    success: (res) => {friends = res}
})

let news
$.ajax({
    async: false,
    url: `http://localhost:322/api/users/news/${userId}`,
    type: 'GET',
    success: (res) => {news = res}
})


createTable(friends)
createNewsTable(friends, news)
