import React, {Component} from 'react';
import {StyleSheet,Text,View,TextInput,WebView} from 'react-native';
import Toast from 'react-native-easy-toast'
export  default class Webdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.navigation.state.params.url,
            title: '',
            canBack: false
        }
    }

    onBack() {
        if (this.state.canBack) {
            this.webView.goBack();
        } else {
            this.toast.show('quit if you click again');
        }
    }

    onNext() {
        this.setState({
            url: this.text
        })
    }

    onNavigationStateChange(e) {
        this.setState({
            title: e.title,
            canBack: e.canGoBack
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.text} onPress={()=>{this.onBack()}}>返回</Text>
                    <TextInput style={styles.input}
                            placeholder={'Please input the web you want to search'}
                            onChangeText={text=>this.text=text}></TextInput>
                    <Text style={styles.text} onPress={()=>{this.onNext()}}>GO</Text>
                </View>
                <WebView source={{uri:this.state.url}}
                        onNavigationStateChange={(e)=>this.onNavigationStateChange(e)}
                        ref={webView=>this.webView=webView}></WebView>
                <Toast ref={toast=>{
                        this.toast=toast
                        }}/>
            </View>
        )
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1
        },
        text: {
            fontSize: 20,
            color: '#333',
            marginLeft: 10
        },
        input: {
            height: 40,
            marginLeft: 10,
            flex: 1,
            borderWidth: 1,
            borderColor:'#dddddd',
            marginBottom:2,
        },
        item: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
            marginRight: 10
        }
    })
