import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {Text,StyleSheet,View} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';

export default class SwipableFlatList extends Component{
       constructor(props){
           super(props);
           this.state={
            allNotification:this.props,allNotification

           }
       }

       updateMarkAsread = notification => {
        db.collection("all_notifications")
          .doc(notification.doc_id)
          .update({
            notification_status: "read"
          });
      };

      



    onSwipeValueChange=swipeData=>{
        var allNotification=this.state.allNotification
        const {key,value}={swipeData}

        if (value < -Dimensions.get("window").width) {
            const newData = [...allNotification];
            this.updateMarkAsRead(allNotification[key]);
            newData.splice(key, 1);
            this.setState({ allNotifications: newData });
          }
          }

      renderItem=data=>{
        <ListItem
         leftElement={<Icon name="book" type="font-awesome" color="#363636"/>}
         title={data.item.book_name}
         titleStyle={{color:"orange",fontWeight:"bold"}}
         subtitle={data.item.message}
         bottomDivider/>
      }
     renderHiddenItem=()=>{
        <View style={styles.rowBack}>
      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Text style={styles.backTextWhite}>Mark as read</Text>
      </View>
      </View>
    
     }


    render(){
        return(
            <View style={styles.container}>
          <SwipeListView
          disableRightSwipe
          data={this.state.allNotification}
          renderItem={this.renderItem}
          renderHiddenItem={this.renderHiddenItem}
          rightOpenValue={-Dimensions.get("window").width}
          previewRowKey={"0"}
          previewOpenValue={"-14"}
          previewOpenDelay={"3000"}
          onSwipeValueChange={this.onSwipeValueChange}/>
          

            </View>
        )
    }
}