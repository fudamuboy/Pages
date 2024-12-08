import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CoursesEkran({ navigation }) {
    return (
        <ImageBackground source={require('../../assets/livre.jpg')}
            style={styles.ImageBackground}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Courses</Text>
                <Button
                    title="Informations"
                    onPress={() => navigation.navigate('CoursInfo')}
                />

            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1,
        resizeMode: 'cover',
    }
})