import {createTable} from "./usersTable/createUsersTable.js";
import '../less/index.less'

$.ajax({
    async: false,
    url: "http://localhost:322/api/users",
    type: 'GET',
    success: createTable
})
