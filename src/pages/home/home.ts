import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FCM } from '@ionic-native/fcm';
import { OneSignal } from '@ionic-native/onesignal';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
titlefirebase='';
bodyfirebase='';
// mykids1='';
// mykids2='';
  constructor(public navCtrl: NavController, public localNotifications:LocalNotifications,private fcm: FCM , private oneSignal:OneSignal) {
  {
    this.onesignalApp()
    }
  }
  oneSignalApp(){

    this.oneSignal.startInit('3a315760-1e5d-4301-ac23-2d13ac4b6697', '714398977805');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    
    this.oneSignal.handleNotificationReceived().subscribe((data) => {
     // do something when notification is received
     alert('Protection of children ')
    //  alert(JSON.stringify(data.payload.title) );

    //  this.mykids1=data.payload.title
    // this.mykids2=data.payload.title

    });
    
    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
      alert('Protection of children kids ')
    });
    
    this.oneSignal.endInit();






  }
  
ionViewDidLoad(){
 this.firebaseMessage() 
}



  firebaseMessage(){
   this. fcm.getToken().then(token => {
     //alert(token);
    });
    
    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        console.log("Received in background");
      alert(data.title+ " / "+ data.body);
      this.titlefirebase=data.title;
      this.bodyfirebase=data.body;
      } else {
        console.log("Received in foreground");
       alert("Received in foreground");
      };
    });
    
 ;
    
  }


  notify(){


    // Schedule a single notification
this.localNotifications.schedule({
  id: 1,
  title:'this  is title',
  text: 'Single ILocalNotification',
sound:null
});

  }
  onesignalApp(){

  }
}
