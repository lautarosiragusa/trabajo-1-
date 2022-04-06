let ingredientesPizza=["harina","jamon","tomate","oregano","queso","aceite","aceituna","levadura","sal","huevo"]

function dividirIngredientes(ingredientesPizza){

    let Pares= [];
    let Impares= [];

    for(let i of ingredientesPizza){
        
        if (i.length % 2 == 0){
        Pares.push(i);}
        else{
        Impares.push(i);
        }

    }
    
    console.log(`Los ingredientes pares son: ${Pares}`)
    console.log(`Los ingredientes pares son: ${Impares}`)

}

dividirIngredientes(ingredientesPizza)