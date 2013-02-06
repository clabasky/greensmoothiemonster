
Ext.define("Gsm.controller.phone.Login", {

     extend: "Ext.app.Controller",

     requires: [
          
         ],
    
     config: {
        
         models: [
            
         ],
         stores: [
            
         ],
         views: [
             
         ],
         refs: {
           signUpBtn: 'button[itemId="signUpBtn"]',
           signInBtn: 'button[itemId="signInBtn"]',
           signInBackBtn: 'button[itemId="signInBackBtn"]',
           returningUserRadio: 'panel[itemId="loginpopup"] > radiofield[itemId="returningUserRadio"]',
           reenterPassword: 'passwordfield[itemId="reenterPasswordField"]',
           userNameField:   'loginpopup > textfield',
           passwordField:   'loginpopup > passwordfield[itemId="passwordField"]'
         },
         
         control: {
             signUpBtn: {
                tap: 'signUpBtnTap'
            },
            
            signInBtn: {
                tap: 'signInBtnTap'
            },
            
            signInBackBtn: {
                tap: 'signInBackBtnTap'
            },
            
            returningUserRadio: {
                change: 'returningUserRadioChange'
            }
           
            
         },
        
          routes: {
            login:      "loginRoute"
         }
     
     },
 
    loginRoute: function(){
        var loginPopup = Ext.ComponentQuery.query('loginpopup')[0];
        if(loginPopup){
            Ext.Viewport.setActiveItem(loginPopup);
        }
        else{
             var loginPopup = Ext.create('Gsm.view.phone.LoginPopup', {});
              //  Ext.Viewport.add(loginPopup);
                Ext.Viewport.setActiveItem(loginPopup);
        }
      
     },
     
     returningUserRadioChange: function(radio, newValue, oldValue, eOpts){
        console.log(newValue);
        if(newValue == false){
            this.getSignUpBtn().setHidden(false);
            this.getReenterPassword().setHidden(false);
            
            this.getSignInBtn().setHidden(true);
        }
        else{
            this.getSignUpBtn().setHidden(true);
            this.getReenterPassword().setHidden(true);
            
              this.getSignInBtn().setHidden(false);
        }
    },
     
    signInBtnTap: function(){
        
        var userName = this.getUserNameField().getValue();
        var password = this.getPasswordField().getValue();
        
        Parse.User.logIn(userName, password, {
            success: function(user) {
              Gsm.app.getController('phone.Login').onSignInSuccess(user);
            },
            error: function(user, error) {
                console.log(user);
                console.log(error);
              // The login failed. Check error to see why.
            }
          });
    },
    
    signUpBtnTap: function(){
        
        var userName = this.getUserNameField().getValue();
        var password = this.getPasswordField().getValue();
        
        var reenterPassword = this.getReenterPassword().getValue();
        
        if(password != reenterPassword){
            Ext.Msg.alert("","The two passwords you entered are different. Please try again.");
            return;
        }
        
        var user = new Parse.User();
        
         
        user.signUp({
            "username":userName,
            "password":password,
            "email":userName
        },
        {
          success: function(user) {
            Gsm.app.getController('phone.Login').onSignInSuccess(user);
          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
          }
        });


     },
     
     onSignInSuccess: function(user){
        console.log(user);
        Gsm.app.getController('phone.Login').signInBackBtnTap();
        
     },
     
     signInBackBtnTap: function(){
        
        Ext.ComponentQuery.query('loginpopup')[0].destroy();
        history.back();
     }

 });