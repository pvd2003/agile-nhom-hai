import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Favorites from '../screens/Favorites';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';

import React from 'react'
import { Image } from 'react-native'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProductNavigation = () => {

    const BottomTabs = () => (
        <Tab.Navigator
            screenOptions={({ route }) => icon(route)}>
            <Tab.Screen
                name="Home"
                component={Home} />
            <Tab.Screen
                name="Favorites"
                component={Favorites} />
            <Tab.Screen
                name="Notification"
                component={Notification} />
            <Tab.Screen
                name="Profile"
                component={Profile} />
        </Tab.Navigator>
    )

    const icon = (route) => {
        return {
            tabBarIcon: ({ focused }) => {
                if (route.name == "Home") {
                    if (focused) {
                        return <Image source={require('../../../../media/images/homeChoose.png')}
                            style={{ width: 20, height: 20 }} />
                    } else {
                        return <Image source={require('../../../../media/images/home.png')}
                            style={{ width: 20, height: 20 }} />
                    }
                }
                else if (route.name == "Favorites") {
                    if (focused) {
                        return <Image source={require('../../../../media/images/favoritesChoose.png')}
                            style={{ width: 20, height: 20 }} />
                    } else {
                        return <Image source={require('../../../../media/images/favorites.png')}
                            style={{ width: 20, height: 20 }} />
                    }
                }
                else if (route.name == "Notification") {
                    if (focused) {
                        return <Image source={require('../../../../media/images/notificationChoose.png')}
                            style={{ width: 20, height: 20 }} />
                    } else {
                        return <Image source={require('../../../../media/images/notification.png')}
                            style={{ width: 20, height: 20 }} />
                    }
                }
                else if (route.name == "Profile") {
                    if (focused) {
                        return <Image Ssource={require('../../../../media/images/profileChoose.png')}
                            style={{ width: 20, height: 20 }} />
                    } else {
                        return <Image source={require('../../../../media/images/profile.png')}
                            style={{ width: 20, height: 20 }} />
                    }
                }
            },
            headerShown: false
        }
    }

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Homee"
                component={BottomTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default ProductNavigation