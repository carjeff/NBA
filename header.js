import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {Icon} from 'react-native-elements'
import judge from '../NBA/teamdata/judge'
class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            data:''
        }
        this._onPress = this._onPress.bind(this)
    }

    _onPress = () => this.props.navigation.navigate('Details',{name:this.state.data})

        render (){
            return(
                <View style={{flexDirection:'row'}}>         
                    <View style={styles.header}>
                        <TouchableOpacity onPress={this._onPress}>
                            <Icon name='search' type='material' color='#ccc'/>
                        </TouchableOpacity>
                    <TextInput
                        onChangeText={(text)=>{this.setState({data:judge[text]})}}
                        onSubmitEditing={() => this._onPress}
                        placeholder="What needs to be done?"
                        blurOnSubmit={false}
                        returnKeyType="done"
                        style={styles.input}/>
                    </View>                
                </View>                
            )
        }
            

}
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    toggleIcon: {
        fontSize: 30,
        color: "#CCC"
    },
    input: {
        marginLeft: 16,
        height: 40,
    }
})

export default Header;