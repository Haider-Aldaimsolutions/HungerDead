import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TouchableOpacity, View, Animated, Dimensions } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Resturant({ route, navigation }) {

    const scrollX = new Animated.Value(0);
    const [restaurant, setRestaurant] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const [foodcount, setFoodCount] = useState(1);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const decreaseCount = () => {
        if (foodcount === 1) { }
        else { setFoodCount(foodcount - 1) }
    }

    const increaseCount = () => {
        setFoodCount(foodcount + 1)
    }

    useEffect(() => {
        let { item, currentLocation } = route.params;

        setRestaurant(item)
        setCurrentLocation(currentLocation)
    })


    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: 20,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={require('../assets/icons/back.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 10,
                            borderRadius: 25,
                            backgroundColor: '#e9e6eb'
                        }}
                    >
                        <Text style={{}}>{restaurant?.name}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: 20,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={require('../assets/icons/list.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    function renderFoodInfo() {
        return (

            <Animated.ScrollView

                horizontal
                pagingEnabled
                snapToAlignment='center'
                scrollEventThrottle={16}
            >
                {restaurant?.menu.map((item, index) => (
                    <View
                        style={{ width: windowWidth, alignItems: 'center', marginTop: 15 }}
                        key={`menu:${index}`}
                    >
                        <Image

                            style={{ width: 250, height: 250, borderRadius: 175, }}
                            source={item.photo}
                            resizeMode='cover'
                        />
                        <View style={{
                            bottom: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity
                                onPress={() => decreaseCount()}
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'orange',
                                    width: 30,
                                    height: 40,
                                    borderTopLeftRadius: 15,
                                    borderBottomLeftRadius: 15,
                                }}
                            >
                                <Text >-</Text>

                            </TouchableOpacity>
                            <View style={{
                                backgroundColor: 'orange',
                                width: 40,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            >
                                <Text style={{ fontWeight: '800' }}>{foodcount}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => increaseCount()}
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'orange',
                                    width: 30,
                                    height: 40,
                                    borderTopRightRadius: 15,
                                    borderBottomRightRadius: 15,
                                }}
                            >
                                <Text >+</Text>

                            </TouchableOpacity>

                        </View>
                        <View style={{ alignItems: 'center', width: '80%' }}>
                            <Text style={{ fontWeight: '700', fontSize: 18, textAlign: 'center', }}>{item.name} - {item.price}$</Text>
                            <Text numberOfLines={2} style={{ alignSelf: 'center', textAlign: 'center', color: 'gray', marginTop: 5 }}>{item.description}</Text>
                            <View style={{ marginTop: 8, flexDirection: 'row' }}>
                                <Image style={{ height: 30, width: 30 }} source={require('../assets/icons/fire.png')} />
                                <Text style={{ color: 'gray', padding: 10 }}>{item.calories} cal</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>

        )
    }

    return (
        <View style={styles.container}>

            {renderHeader()}
            {renderFoodInfo()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
    },
});
