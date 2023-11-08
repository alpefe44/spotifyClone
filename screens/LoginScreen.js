import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import React from 'react'
import LoginButtons from '../components/LoginButtons';

const LoginScreen = ({ navigation }) => {


    return (
        <View style={{ flex: 1, backgroundColor: 'black' }} >
            <View>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                        <Entypo name="spotify" size={34} color="white" />
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Spotify</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 32, marginBottom: 10, color: 'white' }}>Spotify'da oturum aç</Text>
                        <View style={{ alignItems: 'center' }}>
                            <LoginButtons title={"Google ile devam et"} iconName={"google"}></LoginButtons>
                            <LoginButtons title={"Facebook ile devam et"} iconName={"facebook-square"}></LoginButtons>
                            <LoginButtons title={"Apple ile devam et"} iconName={"apple1"}></LoginButtons>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 100 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '80%' }}>
                            <Text style={{ color: 'white', marginVertical: 10, fontWeight: 'bold' }}>
                                E-posta adresi veya kullanıcı adı
                            </Text>
                            <TextInput placeholderTextColor={'white'} placeholder={"E-posta adresi veya kullanıcı adı"} style={{ width: '100%', height: 50, borderRadius: 20, borderWidth: 2, borderColor: 'gray', paddingHorizontal: 10 }}></TextInput>
                        </View>
                        <View style={{ width: '80%' }}>
                            <Text style={{ color: 'white', marginVertical: 10, fontWeight: 'bold' }}>
                                Parola
                            </Text>
                            <View style={{ position: 'relative', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput placeholderTextColor={'white'} placeholder={"Parola"} style={{ width: '100%', height: 50, borderRadius: 20, borderWidth: 2, borderColor: 'gray', paddingHorizontal: 10 }}></TextInput>
                                <TouchableOpacity style={{ position: 'absolute', right: 10 }}>
                                    <Entypo name="eye-with-line" size={24} color="white" />
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '100%', height: 45, alignItems: 'center', marginVertical: 20 }}>
                                <TouchableOpacity style={{ backgroundColor: '#2ebd59', width: '100%', height: '100%', justifyContent: 'center', borderRadius: 20, marginVertical: 10 }} onPress={() => navigation.navigate("Tab")}>
                                    <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>Oturum Aç</Text>
                                </TouchableOpacity>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, textDecorationLine: 'underline', color: 'white' }}>Parolanı mı Unuttun ?</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}




export default LoginScreen