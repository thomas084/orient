import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  lname: string ;
  myform : FormGroup;
  error: string = '';

// error messages in validation 
  error_messages = {
    'email':[
      { type: 'required', message: 'Email is required.'},
      { type: 'minlength', message: 'Email length must be more.'},
      { type: 'maxlength', message: 'Email length cannot be more.'},
      { type: 'pattern', message: 'Enter a valid Email ID.'},
    ],
    'mobile':[
      { type: 'maxlength', message: 'only 10 digit Mobile number is allowed.'},
      { type: 'required', message: 'mobile number is required.' }
    ],
    'password':[
      { type: 'required', message: 'password is required.'},
      { type: 'minlength', message: 'minimum 8 charecters length must.'},
      { type: 'maxlength', message: 'length cannot be more 16 charecters.'},
      { type: 'pattern', message: 'Password Must have atleast one UpperCase, LowerCase, Number/SpecialChar .' }
    ]


  }

  constructor(public navCtrl: NavController,
    private fireauth: AngularFireAuth,
    public afd:AngularFireDatabase,
    private fb : FormBuilder) { 

      // validation
      this.myform = this.fb.group({
        email : new FormControl('',Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
        ])),
       
       
        password : new FormControl('',Validators.compose([
          
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(8),
          Validators.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")
         ])),
       
       
         mobile : new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])),
     
      fname : new FormControl(''),
      lname : new FormControl(''),
      confirmPassword : new FormControl(''),
      });
    }

  ngOnInit() {
  }
  

//adding registering values in database 
  addData(value){
    if (this.myform.value.password !== this.myform.value.confirmPassword){
      console.log(this.myform.value.password)
      console.log(this.myform.value.confirmPassword)
      alert('confirm password must be same as password please re-enter');
    }
    else 
    {
      let dat = Object.assign({}, value);
    this.afd.list('signup/').push(dat);
    this.signup()
    }
  }
//using firebase singup 
  signup() {
    this.lname = "";

    this.fireauth.auth.createUserWithEmailAndPassword(this.myform.value.email, this.myform.value.password)
    
      .then(res => {
        if (res.user) {
          console.log(res.user);
          
        }
      })
      
      .catch(err => {
        console.log(`login failed ${err}`);
        this.error = err.message;
      });
      
      

      this.myform.reset()
  }

  emailverify(){
    this.fireauth.auth.currentUser.sendEmailVerification();
    console.log("mail sent")
  }
}
