import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


function LoginScreen(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");


    function login() {
        const dados = {
            email: email,
            password: password
        }
        console.log(dados);
    }


    return (


        <View style={styles.container}>

          
                <Image source={require('./assets/images/logo.png')} style={styles.logo} />


                <Text style={styles.title}>
                    𝕮𝖔𝖒𝖕𝖗𝖊 𝖘𝖊𝖚 𝖑𝖆𝖓𝖈𝖍𝖊!!
                </Text>


                <View style={styles.card}>
                    <TextInput style={styles.input} placeholder="E-mail ou nome de usuario" placeholderTextColor="#FFFFFF"
                        onChangeText={(textEmail) => setEmail(textEmail)}
                    />


                    <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor="#FFFFFF"
                        onChangeText={(textPassword) => SetPassword(textPassword)}
                    />


                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Esqueceu a senha ?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Não possui conta ? Cadastre-se</Text>
                    </TouchableOpacity>





                    <TouchableOpacity style={styles.button}
                        onPress={() => { login() }}>
                        <Text style={styles.buttonText}>𝕰𝖓𝖙𝖗𝖆𝖗</Text>
                    </TouchableOpacity>

                    <Text style={styles.textLogin}>FAÇA LOGIN OU ENTRE COM:</Text>

                   
                </View>

                <View style={styles.login}>
                        <Image source={require('./assets/images/facebuco.png')} style={styles.logo2} />
                        <Image source={require('./assets/images/google.png')} style={styles.login2} />
                        <Image source={require('./assets/images/apple.png')} style={styles.login3} />

                    </View>
        </View>


    );
}


const styles = StyleSheet.create({
    textLogin: {
        color: '#FFF',
        marginTop: 50,
        marginLeft:'auto',
        marginRight:'auto',
    },
    login: {
        flexDirection: 'row',
        marginLeft: 35,
        marginTop:400
    },
    logo2: {
        height: 70,
        width: 80,
        marginTop: -3,
        marginLeft: -20
    },
    login2: {
        height: 65,
        width: 50,
        marginRight: 35,
        marginLeft: 20
    },
    login3: {
        height: 60,
        width: 50,
        marginRight: 20,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    logo: {
        width: 350,
        height: 200,
        marginBottom: 400
    },


    title: {
        marginTop: -400,
        color: 'black',
        fontSize: 30,
    },
    card: {
        backgroundColor: '#121212',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginBottom: -390
    },
    input: {

        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white',
        color: '#FFF'
    },
    button: {
        backgroundColor: '#FFF',
        height: 40,
        borderRadius: 8,
        width: 150,
        fontSize: 50,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:20
    },
    buttonText: {
        fontSize: 30,
        width: 90,
        color: 'black',
        marginLeft: 30
    },
    forgotPassword: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 10
    },
})
export default LoginScreen;