import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, StatusBar, Image, ScrollView } from "react-native";
import { Carrinho1 } from "./interface/CarrinhoInterface";
import axios from "axios";



const renderItem = ({ item }: { item: Carrinho1 }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTitle}>{item.clientes_id}</Text>

      
    </TouchableOpacity>
);
function Carrinho(): React.JSX.Element {
    const [carrinho, setCarrinho] = useState<Carrinho1[]>([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/all/agenda');
                if (response.data.status == true) {

                    setCarrinho(response.data.data);
                   
                }
                else {
                   
                }
            } catch (error) {

                console.log(error);
            }
        }

        fetchData();
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.textHeader} >CARRINHO</Text>
            </View>




            <FlatList

                showsVerticalScrollIndicator={true}

                data={carrinho}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}



            />


            <View style={styles.card}>


                <TouchableOpacity>
                    <Text style={styles.textCard}>FINALIZAR</Text>
                </TouchableOpacity>

            </View>





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

    decoracao: {
        color: '#FFF'
    },
    item: {
        backgroundColor: 'black',
        color: '#FFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        flexDirection: 'row',
        height: 90,

    },

    itemTitle: {
        fontSize: 30,
        color: '#FFF',
        marginTop: 5
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 30,
        marginLeft: 100,
        marginTop: -20
    },
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: 'black',
        height: 80
    },
    textHeader: {
        color: '#FFF',
        marginTop: 30,
        marginLeft: 150,
        fontSize: 20
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
    card: {

        backgroundColor: 'black',
        height: 68,

    },
    textCard: {
        fontSize: 20,
        marginLeft: 260,
        backgroundColor: 'black',
        height: 40,
        color: '#FFF',
        marginTop: 20,

    },
    numberCard: {
        marginTop: -40,
        color: '#FFF',
        fontSize: 22,
        marginLeft: 15
    }

});

export default Carrinho;