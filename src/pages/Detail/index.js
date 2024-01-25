import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

import Dot from '../../componet/Dot';
import SizeButton from '../../componet/SizeButton';
import Button from '../../componet/Button';
import Footer from '../../componet/Footer';

export default function Detail({ navigation , route}) {

    const { headerTitle } = route.params;

    navigation.setOptions({
        headerTitle: headerTitle
    });

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/detail.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}> R$140</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 30 }]}> Nike Air Max</Text>
                </View>
                <View style={styles.dotContainer}>
                    <Dot color="#2379f4" />
                    <Dot color="#fb6e53" />
                    <Dot color="#ddd" />
                    <Dot color="#000" />
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton bgColor="#17181a" color='#fff'>40</SizeButton>
                        <SizeButton >38</SizeButton>
                        <SizeButton >39</SizeButton>
                    </ScrollView>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>
                    Nike Downshifter 
                    </Text>
                    <Text style={styles.textContainer}>
                        SUA CORRIDA COMEÇA COM UM SUPORTE ESTÁVEL.Dê os primeiros passos na jornada de corrida com o Nike Downshifter 12. Ele conta com sustentação ajustada para proporcionar uma passada estável e leve que transita facilmente entre seu treino e seu dia a dia. Esse tênis dá continuidade à nossa jornada pela sustentabilidade em um design feito com pelo menos 20% de conteúdo reciclado por peso.
                    </Text>
                    <Text style={styles.textList}>
                        - Categoria: Amortecimento
                    </Text>
                    <Text style={styles.textList}>
                        - Material: Mesh
                    </Text>
                </View>
                <Button/>
                <View style={styles.line}/>
                <Footer/>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    image: {
        width: '100%'
    },
    title: {
        fontFamily: 'Lora_400Regular',
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContainer:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle:{
        fontSize: 22,
        marginVertical: '2%'
    },
    textList:{
        fontSize: 16,
        lineHeight: 25
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    }

});