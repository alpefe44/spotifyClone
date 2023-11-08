import { View, Text, Image } from 'react-native'
import React from 'react'

const InfoTracker = ({ imageUrl, title, author }) => {
    return (
        <View style={{ position: 'absolute', bottom: 0 }}>
            <Image source={{ uri: imageUrl }}></Image>
            <View>
                <Text>{title}</Text>
                <Text>{author}</Text>
            </View>
        </View>
    )
}

export default InfoTracker