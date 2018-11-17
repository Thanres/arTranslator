import { cos, sin } from 'mathjs'

export function getLabelPosition(position,forward,distance){
    
    let posx = position[0] + forward[0]*distance
    let posy = position[1] + forward[1]*distance
    let posz = position[2] + forward[2]*distance
    console.warn(posx + '|' + posy + '|' + posz)
    //console.warn('x : ' + position[0] + '| y :' + position[1] + '| z : ' + position[2])
    //console.warn('x : ' + px + '| y :' + py + '| z : ' + pz)
    //console.warn('x : ' + x + '| y :' + y + '| z : ' + z)
    pos = [posx,posy,posz]
    //generates the forwardmovement by angle and adds them to coordinates
    //console.warn(x+y+z)
    return(pos)
}