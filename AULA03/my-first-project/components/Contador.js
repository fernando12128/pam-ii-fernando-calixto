import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

export default class Contador extends React.Component{
    constructor(){
        super();
        this.state = {
            contador: 0,
        };
    }
    Demecrementar (){
        this.setState({ //set é para alteração
            contador: this.state.contador - 1
        });
    }
    Incrementar(){
        this.setState({
            contador: this.state.contador + 1
        });
    }
    render(){
        return(
            <View>
                <View style={styles.texto}>
                    <Text>{this.state.contador}</Text>
                </View>
                <View style={styles.botoes}>
                    <Button
                    style={styles.botao1}
                    title="Aumenta"
                    onPress={this.Incrementar.bind(this)}
                    />
                    <Button
                    style={styles.botao2}
                    onPress={this.Demecrementar.bind(this)}
                    title="Diminui"
                    />
                </View>
            </View>
        );}};

const styles = StyleSheet.create({
    botoes:{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        top:300,
        height: 45,
    },
    texto: {
        alignItems: 'center',
        top:200,
    },
});