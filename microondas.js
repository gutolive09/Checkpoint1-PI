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

    if(tempo >= padrao*3)
        console.log("Kabumm")
     
    else if(tempo >= padrao*2)
        console.log("Prato queimou")
     
    else if(tempo < padrao)
        console.log("Tempo insuficiente")
    
    else
        console.log("Prato pronto, bom apetite!!!")
    
}

microondas('brigadeiro', 5)
