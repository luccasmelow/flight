import { TextInput } from "react-native";
import { View } from "./Themed";

type InputProps = {
    value: string;
    placeholder: string;
}

export function Input({value, placeholder } : InputProps){
    return (
        <View>
            <TextInput
                className="h-4 p-2"
                value={value}
                placeholder={placeholder}
            />
            
        </View>
      
    )
}