export const setStatuses = (callback) => {
    $.ajax({
        async: false,
        url: 'http://localhost:322/api/statuses',
        type: 'GET',
        success: callback
    })
}