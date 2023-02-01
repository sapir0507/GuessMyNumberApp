import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function PrimaryButton({ value }) {
    return (
        <View style={style.buttonOuterContainer}>

        <Pressable 
            onPress={()=>{
                console.log("pressed!");
            }}
            android_ripple={{color: "#644233"}}
            style={({pressed})=>{
                return pressed? 
                //send multipul styles
                [style.buttonInnerContainer, style.iosRipple]:
                style.buttonInnerContainer;
            }}
        >
                <Text style={style.text}>{value}</Text>
        </Pressable>
        </View>
       
    )
}

const style = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,        
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,       
        backgroundColor: '#72063c',
        justifyContent: 'center',
        alignItems: 'center',
        //android shadow
        elevation: 2,
        //ios shadow
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 6,
        shadowOffset:{
            width: 2,
            height: 2
        }
    },
    iosRipple:{
        opacity: 0.75
    },  
    text: {
        color: "white",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})