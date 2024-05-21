function contagem(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let ser = document.getElementById('txts')
    let res = document.getElementById('txtr')

    if(ini.value.length==0 || fim.value.length==0 || ser.value.length==0 ){
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let s = Number(ser.value)
        
        if(s <= 0){
            alert('[ERRO], série inválida, considerando a série da conatagem = 1')
            s = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += s){
                res.innerHTML+= `${c} \u{1F449}`
            }
            
        }else{
            for(let c = i; c >= f; c -= s){
                res.innerHTML+= `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}