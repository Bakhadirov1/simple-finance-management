const divideDate = (date) => {
    return (date.getUTCFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds())
}

module.exports = {
    divideDate
}