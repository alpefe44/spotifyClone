import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { tracks } from '../assets/data/track'

const HomeScreen = () => {

    const renderItem = ({ item }) => {
        return (
            <View style = {{padding:10}}>
                <View style={{ flexDirection: 'row'  }}>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: item.album.images[0]?.url }}></Image>
                    <View style = {{marginLeft:10}}>
                        <Text style={{ color: 'white' , fontSize:12 }}>{item.name}</Text>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>{item.artists[0]?.name}</Text>
                    </View>

                </View>

            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <FlatList
                data={tracks}
                renderItem={renderItem}
            ></FlatList>
        </View>
    )
}

export default HomeScreen