import { TouchableOpacity } from "react-native"
import { View } from "react-native"
import TextWhite from "./textwhite"

export default BotonDetalles =({onPress}) =>{
    return <viwe>
        <TouchableOpacity onPress={onPress}>
            <TextWhite texto="Detalles"></TextWhite>
        </TouchableOpacity>
    </viwe>
}