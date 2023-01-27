module.exports = function reverse (n) {
    const num = String(n).replace('-', '').split('')
    const count = num.length

    let rev = ''

    for (let i = 0; i < count; i++ ){
        rev += num[(count - i) -1]
    }

    return rev
}
