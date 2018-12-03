import { cos, sin } from 'mathjs'

export function getLabelPosition(position,forward,distance){
    
    let posx = position[0] + forward[0]*distance
    let posy = position[1] + forward[1]*distance
    let posz = position[2] + forward[2]*distance
    pos = [posx,posy,posz]
    return(pos)
}