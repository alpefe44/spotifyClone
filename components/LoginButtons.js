import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const LoginButtons = ({ title, iconName }) => {
    return (
        <TouchableOpacity style={{ borderRadius: 20, borderColor: 'white', borderWidth: 2, width: '80%', paddingVertical: 10, marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' , alignItems:'center' }}>
                <AntDesign name={iconName} size={24} color="white" />
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default LoginButtons