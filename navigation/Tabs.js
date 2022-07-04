import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';
import Svg, { Path } from 'react-native-svg';
export default function Tabs() {
    const tab = createBottomTabNavigator();
    const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

        var isSelected = accessibilityState.selected

        if (isSelected) {
            return (
                <View style={{ flex: 1, alignItems: "center" }}>


                    <TouchableOpacity
                        style={{
                            top: -22.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: 'black',
                        }}
                        onPress={onPress}
                    >
                        {children}
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        height: 50,
                        backgroundColor: 'white',
                    }}
                    activeOpacity={1}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            )
        }
    }

    return (
        <tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    left: 0,
                    bottom: 0,
                    right: 0,
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    position: 'absolute',
                    elevation: 0

                },
            }}
        >

            <tab.Screen name="Home" component={Home}
                options={
                    {

                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../assets/icons/cutlery.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'orange' : 'gray'
                                }}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }
                }
            />
            <tab.Screen name="Search" component={Home}
                options={
                    {

                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../assets/icons/search.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'orange' : 'gray'
                                }}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }
                }
            />
            <tab.Screen name="like" component={Home}
                options={
                    {

                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../assets/icons/like.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'orange' : 'gray'
                                }}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }
                }
            />
            <tab.Screen name="user" component={Home}
                options={
                    {

                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../assets/icons/user.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? 'orange' : 'gray'
                                }}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }
                }
            />
        </tab.Navigator>
    );
}

const styles = StyleSheet.create({

});
