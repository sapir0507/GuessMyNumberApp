import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={style.inputContainer}>
            <TextInput 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                style={style.numberInput} />
            <View style={style.buttonsContainer}>
                <View style={style.button}>
                    <PrimaryButton value="Reset" />
                </View>
                <View style={style.button}>
                    <PrimaryButton value="Confirm" />
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const style = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: "#3b021f",
        borderRadius: 8,
        //ios shadow
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        //android only
        elevation: 4

    },
    numberInput:{
        height:50,
        //width control
        width: 50,
        textAlign: "center",
        fontSize:32,
        borderColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: 'bold',
       
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    button: {
        flex: 1
    }
})