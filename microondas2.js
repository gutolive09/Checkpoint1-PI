function microondas(prato, tempo){
    switch (prato) {
        case 'pipoca':
            padrao = 10
            break;
        
         case 'macarrao':
            padrao = 8
            break;
    
        case 'carne':
            padrao = 15
            break;
        
        case 'feijao':
            padrao = 12
            break;
        
        case 'brigadeiro':
            padrao = 8
            break;
            
        default:
            console.log("Prato inexistente")
            return;
    }

    const repostaTempo = microondasTempo(tempo)
    console.log(repostaTempo)
}

function microondasTempo (tempo){
    if(tempo >= padrao*3) return "Kabummm"
    if(tempo >= padrao*2) return "Prato queimou"
    if(tempo < padrao) return "Tempo insuficiente"
    return "Prato pronto, bom apetite!!!"
}

microondas('brigadeiro', 7)