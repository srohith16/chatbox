import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  user1;
  user2;
  cond1: boolean = false;
  temp1;
  temp2;
  temp3;
  temp4;
  reply1 = "Hi";
  reply2 = "Hello";
  reply3 = "How are you";
  reply4 = "I am fine";
  reply5 = "Thank you";
  user3 = [
    {
      "text": "Hi",
      "cond": false
    },
    {
      "text": "Hello",
      "cond": false
    }
    // ,
    // {
    //   "text": "How are you",
    //   "cond": false
    // },
    // {
    //   "text": "I am fine",
    //   "cond": true
    // },
    // {
    //   "text": "Thank you",
    //   "cond": false
    // }
  ];

  chatbox(val) {
    
    if(val == "Hi" || val == "Hello"){
      this.user1 = (val);
      this.temp1 = ["Hello!"," How can we help you?"]

    } else if(val == "How are you"){
      this.user2 = (val);
      this.temp2 = ["I am doing good", " What about you?"]
    }
    
      }
    
  // callback() {
  //   if (this.cond1 == true) {
  //   for (let a = 0; a < this.user1.length; a++) { 
  //     if(this.temp1 = "Hi"){
  //     console.log(this.temp1);
  //     this.user3[a].cond = true;
      
  //   //   for (let a = 0; a < this.user1.length; a++) {
  //   //     this.temp = a;
  //   //     // if(a > 0){
  //   //     // this.user2 = [];
  //   //     // console.log(a);
  //   //     // console.log(this.user2);
  //   //     // }
  //   //     this.user2.push(this.user3[a]);
        
  //   //     this.cond1 = false;

  //   //   }
  //     }}
  //   }
  // }

  gifMethod()  {
    alert("Gif's..");

  }
  smileMethod()  {
    alert("smile's..");

  }

  attachMethod()  {
    alert("attach's..");

  }

}
