module.exports = (data) => {
    const fullDate = new Date()
    
    let month = fullDate.getMonth().toString()
    if (month.length < 2) month = '0' + month

    let date = fullDate.getDate().toString()
    if (date.length < 2) date = '0' + date

    const year = fullDate.getFullYear().toString().slice(-2)

    let hour = fullDate.getHours().toString()
    if (hour.length < 2) hour = '0' + hour

    let minute = fullDate.getMinutes().toString()
    if (minute.length < 2) minute = '0' + minute

    let second = fullDate.getSeconds().toString()
    if (second.length < 2) second = '0' + second

    const prettyDate = '[' + month + '/' + date + '/' + year + ' ' + hour + ':' + minute + ':' + second + ']'

    console.log(prettyDate + ' ' + data)
}
