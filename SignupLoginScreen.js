import React from 'react';
import {Text,StyleSheet,View,KeyboardAvoidingView,TouchableOpacity, Alert,ScrollView,Modal,TextInput} from 'react-native';
import BarterAnimation from '../assets/31821-share-everythin-moneybooks.json';
import db from '../config';
import firebase from 'firebase';
export default class WelcomeScreen extends React.Component{

      constructor(){
          super();
          this.state={
              username:'',
              password:'',
              emailid:'',
              isModalVisible:'false',
              firstName:'',
              lastName:'',
              address:'',
              confirm_password:'',
              phone_number:''

          }
      }


      userLogin=(username,password)=>{
        firebase.auth().signInwithEmailandPassword(username,password)
         .then(()=>{
           return Alert.alert("Sucessfully Login")
         })
         .catch((error)=>{
           var errorCode =error.code;
           var errorMessage=error.message;
           return Alert.alert(errorMessage);
         })
      }

      userSignUp=(username,password)=>{
         firebase.auth().signInwithEmailandPassword(username,password)
         .then((response)=>{

          db.collection('users').add({
            first_name:this.state.firstName,
            last_name:this.state.lastName,
            user_name:this.state.username,
            phone_number:this.state.phone_number,
            address:this.state.address
  
  
  
          })
           return Alert.alert("User Added Sucessfully")
         })
         .catch((error)=>{
           var errorCode =error.code;
           var errorMessage=error.message;
           return Alert.alert(errorMessage);
         })
      }
           showModal=()=>{
             <Modal 
             animationType="fade"
             transparent={true}
             visible={this.state.isModalVisible}>

            <View style={styles.modalContainer}>
            <ScrollView style={{width:'100%'}}>
             <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
             <Text style={styles.modalTitle} >Registration</Text>
               <TextInput
               style={styles.formTextInput}
               placeholder={"First Name"}
               maxLength={8}
               onChangeText={(text)=>{
                    this.setState({
                      firstName:text
                    })
               }}/>
               <TextInput
               style={styles.formTextInput}
               placeholder={"Last Name"}
               maxLength={8}
               onChangeText={(text)=>{
                  this.setState({
                    lastName:text
                  })
               }}/>
                <TextInput
                style={styles.formTextInput}
                placeholder={"Phone Number"}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                   this.setState({
                     phone_number:text
                   })
                }}
                />
                <TextInput
                style={styles.formTextInput}
                placeholder={"Address"}
                multiline={true}
                onChangeText={(text)=>{
                  this.setState({
                    address:text
                  })
                }}/>
                <TextInput
                style={styles.formTextInput}
                placeholder={"User Name"}
                maxLength={10}
                onChangeText={()=>{
                  this.setState({
                    username:text
                  })
                }}/>
                <TextInput
                style={styles.formTextInput}
                placeholder={"Email"}
                keyboardType={'email-address'}
                onChangeText={()=>{
                  this.setState({
                    emailid:text
                  })
                }}/>
                <TextInput
                style={styles.formTextInput}
                placeholder={"Password"}
                secureTextEntry={true}
                onChangeText={()=>{
                  this.setState({
                    password:text
                  })
                }}/>
                <TextInput
                style={styles.formTextInput}
                placeholder={"Confirm Password"}
                secureTextEntry={true}
                onChangeText={()=>{
                  this.setState({
                    confirm_password:text
                  })
                }}/>
                <View style={styles.modalBackButton}>
                 <TouchableOpacity
                 style={styles.registerButton}
                 onPress={()=>
                   this.userSignUp(this.state.emailid,this.state.password,this.state.confirm_password)
                 }
                 >
                 <Text style={styles.registerButtonText}>Register</Text>
                 </TouchableOpacity>
                </View>
                <View style={styles.modalBackButton}>
                   <TouchableOpacity
                   style={styles.cancelButton}
                   onPress={()=>this.setState({"isModalVisible":false})}>
                  <Text style={{color:'#ff5722'}}>Cancel</Text>
                   </TouchableOpacity>
                   </View>
                   </KeyboardAvoidingView>
             </ScrollView>

            </View>
             </Modal>
          }
     
    render(){
        return(
          <View style={styles.container}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              {
                this.showModal()
              }
              <Text style={styles.title}>Barter System</Text>
            </View>
              <View style={{alignItems:"center"}}>
                <TextInput
                style={styles.loginBox}
                keyboardType='email-address'
                placeholder="abc@example.com"
                onChangeText={(text)=>{
                  this.state({
                    username:text
                  })
                }}
            />
            <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={(text)=>{
              this.state({
                password:text
              })
            }}
            />
            <TouchableOpacity
            style={[styles.button,{marginTop:10}]}
            onPress={()=>{this.userLogin(this.state.username,this.state.password)}}>
              <Text style={{color:"#ff5722",fontSize:18,fontWeight:"bold"}}>LOGIN</Text>

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.username,this.state.password)}}>
              <Text style={{color:"#ff5722",fontSize:18,fontWeight:"bold"}}>SIGNUP</Text>
            </TouchableOpacity>
     
            </View>

          </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
   profileContainer:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   },
   title :{
     fontSize:65,
     fontWeight:'300',
     paddingBottom:30,
     color : '#ff3d00'
   },
   loginBox:{
     width: 300,
     height: 40,
     borderBottomWidth: 1.5,
     borderColor : '#ff8a65',
     fontSize: 20,
     margin:10,
     paddingLeft:10
   },
   KeyboardAvoidingView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   modalTitle :{
     justifyContent:'center',
     alignSelf:'center',
     fontSize:30,
     color:'#ff5722',
     margin:50
   },
   modalContainer:{
     flex:1,
     borderRadius:20,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:"#ffff",
     marginRight:30,
     marginLeft : 30,
     marginTop:80,
     marginBottom:80,
   },
   formTextInput:{
     width:"75%",
     height:35,
     alignSelf:'center',
     borderColor:'#ffab91',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },
   registerButton:{
     width:200,
     height:40,
     alignItems:'center',
     justifyContent:'center',
     borderWidth:1,
     borderRadius:10,
     marginTop:30
   },
   registerButtonText:{
     color:'#ff5722',
     fontSize:15,
     fontWeight:'bold'
   },
   cancelButton:{
     width:200,
     height:30,
     justifyContent:'center',
     alignItems:'center',
     marginTop:5,
   },
  
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   },
   modalBackButton:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
  }
  })
  