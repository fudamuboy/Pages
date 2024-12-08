import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'
import React from 'react'

export default function HomeEkran({ navigation }) {
    return (
        <ImageBackground source={require('../../assets/ground.jpg')}
            style={styles.backgroundImage}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Ana Sayfa</Text>
                <Button
                    title="GOSTER"
                    onPress={() => navigation.navigate('Courses')}
                />


            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    }
})