import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';
import { Produto2 } from "../interface/ProdutoInterface";

const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto2[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');



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
                let imagemUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imagemUri);
                console.log(imagemUri)
            }
        });
    }

    const cadastarProduto = async () => {
        try {
            const formData = new FormData();

            formData.append('nome', nome);
            formData.append('preco', preco);
            formData.append('ingredientes', ingredientes);
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name: new Date() + '.jpg'
            });

            const response = await axios.post('http://10.137.11.217:8000/api/produtos/cadastro', formData, {
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
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri)
            }
        })
    }

    console.log()

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
                        placeholder="Preço do Produto"
                        placeholderTextColor="#FFFFFF"
                        value={preco}
                        onChangeText={setPreco}
                    />
                    <TextInput style={styles.input}
                        placeholder="Ingredientes"
                        placeholderTextColor="#FFFFFF"
                        value={ingredientes}
                        onChangeText={setIngredientes}
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
                        <Text style={styles.buttonText2} onPress={cadastarProduto}>Cadastrar Produto</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>

    );



}
const styles = StyleSheet.create({
    imageButtonText: {
        color: 'black',
        backgroundColor: '#FFF'
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
        marginTop: 20
    },
    imageButton: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        color: 'black'
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
        color: 'white'
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
});

export default CadastroProduto;