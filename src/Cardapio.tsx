import React from "react";
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, StatusBar, Image, ScrollView } from "react-native";

interface lanches {
    id: string;
    nome: string;
    preco: number;
    Ingredientes: string;
    image: any;
}

const dados: lanches[] = [
    { id: '1', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '2', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '3', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '4', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '5', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '6', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '7', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '8', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '9', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '10', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '11', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '12', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '13', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '14', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },
    { id: '15', nome: '𝖃-𝕿𝖀𝕯𝕺', preco: 30.00, Ingredientes: "pão, queijo, 3 hamburguers, 5 ovo, 4 salsicha , salada", image: require('./assets/images/big.jpg') },

];




const renderItem = ({ item }: { item: lanches }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>R${item.preco},00</Text>
        <Text style={styles.decoracao}>--------------------------</Text>
        <Text style={styles.itemText}>{item.Ingredientes}</Text>
        <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
);



function Cardapio(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content' />

            <View style={styles.header}>
                <Image style={styles.imageHeader} source={require('./assets/images/logo.png')} />
            </View>
            <ScrollView>
                <Text style={styles.textoA}>𝕷𝖆𝖓𝖈𝖍𝖊𝖘</Text>
                <FlatList

                    showsVerticalScrollIndicator={true}

                    data={dados}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}



                />

            </ScrollView>



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