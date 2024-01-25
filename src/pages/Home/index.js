import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Shoes from '../../componet/shoes';

export default function Home() {
    const navigation = useNavigation();

    const handleShoesClick = (headerTitle) => {
        navigation.navigate('Detail', { headerTitle });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/banner.png')}
                    style={styles.image}
                />
                <View style={styles.TextContainer}>
                    <Text style={[styles.text, { color: '#CECECF' }]}>TENIS</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>-</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: "center" }}>
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line} />
            <ScrollView>
                <Text style={styles.text}>LANÇAMENTOS</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/1.png')} cost="R$140,90" onClick={handleShoesClick} headerTitle="Nike Air Max Dia">Nike Air Max Dia</Shoes>
                    <Shoes img={require('../../assets/2.png')} cost="R$280,90" onClick={handleShoesClick} headerTitle="Nike Downshiter">Nike Downshiter</Shoes>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/3.png')} cost="R$240,90" onClick={handleShoesClick} headerTitle="Nike Soesa">Nike Soesa</Shoes>
                    <Shoes img={require('../../assets/4.png')} cost="R$230,90" onClick={handleShoesClick} headerTitle="Nike FlyCry">Nike FlyCry</Shoes>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/5.png')} cost="R$140,90" onClick={handleShoesClick} headerTitle="Nike SEA">Nike SEA</Shoes>
                    <Shoes img={require('../../assets/6.png')} cost="R$120,90" onClick={handleShoesClick} headerTitle="Nike Cry">Nike Cry</Shoes>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    header: {
        marginBottom: 8,
    },
    image: {
        width: '100%'
    },
    TextContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Lora_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2,
    }


})