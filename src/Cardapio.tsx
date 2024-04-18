import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, StatusBar, Image, ScrollView } from "react-native";
import { Produto2 } from "./interface/ProdutoInterface";





const renderItem = ({ item }: { item: Produto2 }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>R${item.preco}</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>{item.Ingredientes}</Text>
        {item.image != '' ? <Image source={{ uri: item.image }} style={styles.image} /> : null}
    </TouchableOpacity>
);



function Cardapio(): React.JSX.Element {
    const [produto, setProduto] = useState<Produto2[]>([]);
    const [erro, setErro] = useState<string>("");


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.11.217:8000/api/produtos');
                setProduto(response.data);
                console.log(produto)
            } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />

            <View style={styles.header}>
                <Image style={styles.imageHeader} source={require('./assets/images/logo.png')} />
            </View>
            <Text style={styles.textoA}>𝕷𝖆𝖓𝖈𝖍𝖊𝖘</Text>
            <FlatList
                showsVerticalScrollIndicator={true}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                data={produto}


            />




            <View style={styles.footer}>

                <TouchableOpacity>
                    <Image source={require('./assets/images/menu.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/home.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/pedidos.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/perfil.png')} style={styles.footerIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    imageHeader: {
        height: 100,
        marginTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 300
    },

    textoA: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 40,
        color: 'black',
        marginTop: 80
    },

    container: {
        flex: 1,

    },
    decoracao: {
        color: '#FFF'
    },
    item: {
        backgroundColor: 'black',
        color: '#FFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
    },
    itemText: {
        color: '#FFF',
        flexDirection: 'column',
        fontSize: 20
    },
    itemTitle: {
        fontSize: 30,
        color: '#FFF'
    },
    header: {
        backgroundColor: "#FFF",
        flexDirection: 'row',
        height: 150,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 40,
        color: 'black',
        marginLeft: 95
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#FFF',
        flexDirection: "row",
        justifyContent: 'center',
        marginLeft: 40
    },
    footerIcon: {
        height: 40,
        width: 40,
        marginRight: 45
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 30
    },


});

export default Cardapio;