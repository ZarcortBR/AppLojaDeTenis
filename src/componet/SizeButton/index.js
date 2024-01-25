import { View, StyleSheet, Text } from 'react-native';

export default function SizeButton(props) {
 return (
    <View style={[styles.container,{backgroundColor: props.bgColor || '#fff'} ]}>
        <Text style={[styles.text, {color: props.color || '#ddd'}]}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#161616',
        borderWidth: 3,
        marginHorizontal: 10,
    },
    text:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});