function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um numero')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
                let item = document.createElement('option')
                let item_text = document.createTextNode(`${n} x ${c} = ${n*c}`)
                item.appendChild(item_text)
                document.getElementById('seltab').appendChild(item)
                c++
        }
    }
}
