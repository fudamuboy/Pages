import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Info({ title, imageSource, desc }) {
    return (
        <View>
            <Image style={styles.img} source={imageSource} />

            <View style={styles.textler}>
                <Text style={styles.title}>{title} </Text>
                <Text style={styles.desc}>{desc} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 'auto',
    },
    textler: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,

    },
    title: {
        fontSize: 30,
    },
    desc: {
        fontSize: 20,
    }
})