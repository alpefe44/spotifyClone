import * as React from 'react';
import { BlurView } from 'expo-blur';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from '../screens/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle : { backgroundColor: 'black' },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search-circle' : 'search-circle-sharp';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',


            })} >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'black', borderBottomStartRadius: 10, borderBottomEndRadius: 10 }, headerTintColor: 'white' }} />
        </Tab.Navigator>
    )

}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
                <Stack.Screen name='Tab' component={TabNav}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}