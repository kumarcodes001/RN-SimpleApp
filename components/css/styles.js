import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
    },

    InputBox: {
        backgroundColor: "#444444",
        borderRadius: 10,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        color: "#EDEDED",
        alignItems: "center",
    },

    LoginBtn: {
        width: "70%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        color: "#ff7575",
        backgroundColor: "#DA0037",
    },
    loginText: {
        marginTop: 10,
        color: "#0004ff",
    },
    loginbtnText: {
        color: "#00fff7"
    },
    locopt: {
        color: "#7a170c"
    },
    btns: {
        width: 250,
        height: 60,
        backgroundColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginBottom: 12
    },
    camcontainer: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    btnstxt: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff'
    },
    locText: {
        fontSize: 15,
        color: "#080808",
        height: 30,
        borderColor: "#080808",
    },
    loccontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    apibtn: {
        width: 510,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
        color: "#fffff",
        backgroundColor: "#00c4de",
    },
    apdcontainer: {
        flex: 1,
        backgroundColor: "#ffff",
        paddingHorizontal: 10,
      },
      apdlistItem: {
        paddingBottom: '3%',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      apdheaderText: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      apdsubText: {
        fontSize: 14,
      },
      apdlistItem: {
        flex: 1,
      },
      apdbvi:{
        paddingTop: '2%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#515151',
      },
      countcontainer: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      counttext: {
        fontSize: 24,
        fontWeight: '600',
        color:'black',
      },
      countbtns: {
        width: 510,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor: "#4f55ff",
      },
    
});
