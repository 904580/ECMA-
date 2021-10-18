export function  calculateArea(shape, ...args){
    let area =0;
    switch(shape){
        case "Rectangle":
            area = areaOfRectangle(...args)
            break
            case "square":
                area = areaOfSquare(...args)
                break
                case "Circle":
                    area = areaOfCircle(...args)
    }
return area

}

function areaOfRectangle(...args){
    let length =args[0]
    let width =args[1]
    return length * width
}


function  areaOfSquare(...args){
    return args[0]* args[0]
}
function areaOfCircle(...args){

    return Math.PI = args[0] *args[0]


}