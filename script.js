let today = new Date()
let cmas = new Date(today.getFullYear(), 11, 25)
if (today.getMonth() === 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1)
}
let oneDay = 1000 * 60 * 60 * 24
console.log(`${Math.ceil((cmas.getTime() - today.getTime()) / oneDay)}`)
