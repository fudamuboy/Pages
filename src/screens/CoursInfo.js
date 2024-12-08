import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Info from '../../components/Info'


export default function CoursInfo() {
    return (
        <ScrollView>
            <Info title="Angular"
                imageSource={require('../../assets/angular.webp')}
                desc="Kapsamli bir egitim"
            />
            <Info title="Flutter dev"
                imageSource={require('../../assets/flu.jpg')}
                desc="Kapsamli bi egitim" />

            <Info title="Javascript"
                imageSource={require('../../assets/sEre4cug.png')}
                desc="Kapsamli bi egitim" />

            <Info title="CSS"
                imageSource={require('../../assets/cys.jpg')}
                desc="Kapsamli bi egitim" />

        </ScrollView>
    )
}

const styles = StyleSheet.create({})