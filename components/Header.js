import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

export default function Header() {
    return (

        <View style={styles.header}>
            <TouchableOpacity>
                <Image style={{ margin: 10, width: 30, height: 30 }} source={require('../assets/icons/nearby.png')} />
            </TouchableOpacity>
            <Text style={{
                margin: 5,
                borderRadius: 18,
                padding: 10,
                backgroundColor: '#e9e6eb',
                fontSize: 18,
                fontWeight: '700',
                paddingHorizontal: 40,
                alignItems: 'center',
                justifyContent: 'center',
            }} >H3 Johar Town</Text>
            <TouchableOpacity>
                <Image style={{ right: 0, margin: 10, width: 30, height: 30 }} source={require('../assets/icons/shopping-basket.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',

        flexDirection: 'row',
    }
});


