import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const CadastroCliente: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');
    const [email, setEmail] = useState<string>('');
    const [cpf,setCpf] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('cancelado pelo usuario');
            } else if (response.error) {
                console.log('erro ao abrir a camera');
            } else {
                let ImageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(ImageUri);
                console.log(ImageUri)
            }
        });
    }
    const cadastarCliente = async () => {
        try {
            const formData = new FormData();

            formData.append('nome', nome);
            formData.append('telefone', telefone);
            formData.append('endereco', endereco);
            formData.append('password', password);
            formData.append('email', email);
            formData.append('cpf',cpf)
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name: new Date() + '.jpg'
            });

          console.log(formData)
            const response = await axios.post('http://10.137.11.217:8000/api/clientes/cadastro', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const selecionarImagen = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('cancelado pelo usuário');
            } else if (response.error) {
                console.log('erro ao abrir a galeria');
            } else {
                let ImagemUri = response.uri || response.assets?.[0]?.uri;
                setImagem(ImagemUri)
            }
        })
    }
    return (
        <ScrollView>
        <View style={styles.container}>

           


            <Image source={require('../assets/images/logo.png')} style={styles.logo} />

        

            <View style={styles.card}>
                <TextInput style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#FFFFFF"
                    value={nome}
                    onChangeText={setNome}
                />


                <TextInput style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#FFF"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput style={styles.input}
                    placeholder="Telefone exp: (18) 9999-99999"
                    placeholderTextColor="#FFFFFF"
                    value={telefone}
                    onChangeText={setTelefone}
                />
                <TextInput style={styles.input}
                    placeholder="Endereço"
                    placeholderTextColor="#FFFFFF"
                    value={endereco}
                    onChangeText={setEndereco}
                />
                  <TextInput style={styles.input}
                    placeholder="CPF: 777777777777"
                    placeholderTextColor="#FFFFFF"
                    value={cpf}
                    onChangeText={setCpf}
                />
                <TextInput style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#FFFFFF"
                    value={password}
                    onChangeText={setPassword}
                    
                />

                <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.fotoSelecionada} /> : null}
                </View>

                <TouchableOpacity style={styles.imageButton}>
                    <Text style={styles.imageButtonText} onPress={selecionarImagen}>Selecionar Imagen</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.imageButton}>
                    <Text style={styles.imageButtonText} onPress={abrirCamera}>Tirar Foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button3}>
                    <Text style={styles.buttonText2} onPress={cadastarCliente}>Cadastrar Produto</Text>
                </TouchableOpacity>
            </View>
          
        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    imageButtonText:{
        color:'black',
        backgroundColor:'#FFF'
    },
    buttonText2: {
        color: 'white',
        fontWeight: 'bold'
    },
    button3: {
        backgroundColor: 'black',
        padding: 1,
        borderRadius: 5,
        alignItems: 'center',
        marginTop:20,
        height:30
    },
    imageButton: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        color:'black'
    },
    fotoSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    login: {
        flexDirection: 'row',

    },
    logo2: {
        height: 70,
        width: 75,
        marginTop: -7,
        marginLeft: 30
    },
    login2: {
        height: 65,
        width: 50,

    },
    login3: {
        height: 60,
        width: 50,

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
        marginTop: -360
    },
    input: {

        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white',
        color:'white'
    },
 
    buttonText: {
        fontSize: 25,
        width: 190,
        color: 'black',
        marginLeft: -50
    },
    forgotPassword: {
        color: 'black',
        textAlign: 'center',

    },
})
export default CadastroCliente;