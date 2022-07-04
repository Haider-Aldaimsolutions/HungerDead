import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Image, Text, View, FlatList } from 'react-native';
import { restaurantData } from './API';
export default function FoodFeed() {

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={{ marginBottom: 20 }}>
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
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>

    );

    return (
        <View style={styles.flatlist_container}>
            <FlatList
                style={{ paddingHorizontal: 20, paddingBottom: 20 }}
                data={restaurantData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
