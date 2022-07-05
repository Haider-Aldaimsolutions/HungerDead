import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import { categoryData, restaurantData } from './API';

export default function MainCatagories() {
    const [catagory, setCatagory] = useState('');
    const setCatagoryHandler = (category) => {
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        //setRestaurants(restaurantList)

        //setSelectedCategory(category)
        setCatagory(category)
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.single_button, { backgroundColor: (catagory?.id == item.id) ? 'orange' : '#f5f5f5' }]}
            onPress={() => setCatagoryHandler(item)}
        >
            <View style={{ width: 60, height: 60, backgroundColor: "#fafbfc", borderRadius: 30, alignItems: 'center', marginTop: 10, justifyContent: 'center' }}>
                <Image style={{ width: 30, height: 30, resizeMode: 'contain', borderRadius: 20 }} source={item.icon} />
            </View>

            <Text style={{ color: (catagory?.id == item.id) ? 'white' : 'black', paddingTop: 10, fontSize: 15, }}> {item.name}</Text>
        </TouchableOpacity >

    );
    return (
        <>
            <View style={styles.Text_container}>
                <Text style={{ fontWeight: '700', fontSize: 40 }}>Main</Text>
                <Text style={{ fontWeight: '700', fontSize: 40 }}>Catagories</Text>
                <StatusBar style="auto" />
            </View>

            <View style={styles.flatlist_container}>
                <FlatList
                    horizontal
                    data={categoryData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

                {/* <Text>{catagory.name}</Text> 
                <Text>{console.log(catagory)}</Text>*/}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    Text_container: {
        paddingLeft: 30,
        backgroundColor: '#fff',
    },
    flatlist_container: {
        marginLeft: 15,
    },
    single_button: {
        margin: 5,
        alignItems: 'center',
        height: 130,
        width: 85,
        borderRadius: 60,


    }
});
