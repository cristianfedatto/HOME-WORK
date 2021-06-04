import React, {Component} from 'react';
import {Text,View, StyleSheet, TextBase} from 'react-native';

class Home extends Component {
    state = {
        texto : "Segure pressionado"
    }

    alteraTexto = () => {
        this.setState({texto : 'Funcionou'});

    }

    quandoclicar = () => {
        this.setState({texto: 'Clicou'});
    }

    render (){
        let {texto} = this.state;
        return(
            <View style={StyleSheet.fundo}>
                <Text onLongPress={this.alteraTexto} style={style.texto}>{texto}</Text>
                <Text onPress={this.quandoclicar} style={StyleSheet.novacor}>{texto}</Text>
            </View>
        );

    }
}
const styles = StyleSheet.create({
    fundo:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'black'
    },

    novacor:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'blue'
    },

    texto:{
        fontSize:30,
        textAlign:'center',
        color:'yellow'
    }
});
export default Home;