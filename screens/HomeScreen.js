import { View, Text, FlatList, Image, Pressable, StyleSheet, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { tracks } from '../assets/data/track'
import { FontAwesome } from '@expo/vector-icons';
import InfoTracker from '../components/InfoTracker'
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeScreen = () => {


    const [pressed, setPressed] = useState("")
    const [search, setSearch] = useState("")

    const renderItem = ({ item }) => {
        return (
            <Pressable onPress={() => setPressed(item.name)} style={{ padding: 10, width: '100%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%' }}>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: item.album.images[0]?.url }}></Image>
                    <View style={{ marginLeft: 10, flexWrap: 'nowrap', width: 'auto' }}>
                        <Text style={{ color: pressed === item.name ? 'green' : 'white', fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>{item.artists[0]?.name}</Text>
                    </View>
                </View>
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar barStyle={'light-content'}></StatusBar>
            <View>
                <FlatList
                    data={tracks}
                    renderItem={renderItem}
                    ListHeaderComponent={() => {
                        return (
                            <View style={styles.header}>
                                <FontAwesome name="search" size={16} color="gray" />
                                <TextInput
                                    value={search}
                                    placeholder="What do you want to listen to?"
                                    onChangeText={setSearch}
                                    style={styles.input}
                                />
                                <Text style = {{color : 'white'}}>Cancel</Text>
                            </View>
                        )

                    }}
                ></FlatList>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:10
    },
    input: {
        backgroundColor: '#121314',
        color: 'white',
        flex: 1,
        marginHorizontal: 10,
        padding: 8,
        borderRadius: 5,
    },
});


export default HomeScreen