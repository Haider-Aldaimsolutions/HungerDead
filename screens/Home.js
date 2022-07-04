import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import Header from '../components/Header';
import MainCatagories from '../components/MainCatagories';
import FoodFeed from '../components/FoodFeed';
export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header />
            <MainCatagories />
            <FoodFeed />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: 'white',
        flex: 1
    },

});
