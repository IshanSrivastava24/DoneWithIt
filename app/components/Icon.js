import React from 'react';
import { MaterialCommunityIcons} from "@expo/vector-icons"
import { View } from 'react-native';

function Icon({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff",

}) {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor: backgroundColor,
            borderRadius: size / 2,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor}/>
        </View>
    );
}

export default Icon;