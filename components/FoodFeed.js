import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View, FlatList } from 'react-native';
import { restaurantData, categoryData, initialCurrentLocation } from './API';

export default function FoodFeed() {
    const navigation = useNavigation();
    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [restaurants, setRestaurants] = useState(restaurantData)
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ marginBottom: 20, }}
            onPress={() => navigation.navigate('Resturant', {
                item,
                currentLocation
            })}
        >

            <View >
                <Image style={{ borderRadius: 15, width: '100%', height: 200, }} source={item.photo} />
                <Text style={{
                    backgroundColor: '#f5f5f5',
                    position: 'absolute',
                    width: 110,
                    height: 40,
                    bottom: 0,
                    textAlign: 'center',
                    fontWeight: '800',
                    paddingTop: 10,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 15,
                }}>{item.duration}</Text>

            </View>
            <View >
                <Text style={{
                    backgroundColor: '#f5f5f5',
                    width: '60%',
                    textAlign: 'center',
                    paddingTop: 10,
                    height: 35,
                    borderRadius: 20,
                    marginTop: 5,
                    fontWeight: '700',
                    fontSize: 16,
                }}>{item.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Image style={{ height: 20, width: 20, marginRight: 5 }} source={require('../assets/icons/star.png')} />
                <Text style={{ fontWeight: '800', marginTop: 5, marginRight: 5 }}>{item.rating}</Text>
                {
                    item.categories.map((categoryId) => {
                        return (
                            <View
                                style={{ flexDirection: 'row' }}
                                key={categoryId}
                            >
                                <Text style={{ marginTop: 5, }}>{getCategoryNameById(categoryId)} </Text>
                                <Text>  </Text>
                            </View>
                        )
                    })
                }
            </View>

        </TouchableOpacity>

    );

    return (

        <FlatList
            style={{ paddingHorizontal: 20 }}
            data={restaurantData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />

    );
}


