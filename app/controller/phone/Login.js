
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
           returningUserRadio: 'panel[itemId="loginpopup"] > fieldset > radiofield[itemId="returningUserRadio"]',
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
        
        var userName = this.getUserNameField().getValue().toLocaleLowerCase();
        var password = this.getPasswordField().getValue();
        
        Parse.User.logIn(userName, password, {
            success: function(user) {
              Gsm.app.getController('phone.Login').onSignInSuccess(user);
            },
            error: function(user, error) {
                console.log(user);
                console.log(error);
                alert(Ext.encode(error));
              // The login failed. Check error to see why.
            }
          });
        
        this.getPasswordField().setValue("");
        this.getReenterPassword("");
    },
    
    signUpBtnTap: function(){
        
        var userName = this.getUserNameField().getValue().toLocaleLowerCase();
        var password = this.getPasswordField().getValue();
        
        var reenterPassword = this.getReenterPassword().getValue();
        
        if(password != reenterPassword){
            Ext.Msg.alert("","The two passwords you entered are different. Please try again.");
            return;
        }
        
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Signing Up...'
        });
        
        
        var user = new Parse.User();
        
        user.signUp({
            "username":userName,
            "password":password,
            "email":userName
        },
        {
          success: function(user) {
            Ext.Viewport.setMasked(false);
            Gsm.app.getController('phone.Login').onSignInSuccess(user);
          },
          error: function(user, error) {
             Ext.Viewport.setMasked(false);
             
             if(error.message == "invalid login parameters"){
                Ext.Msg.alert("","Invalid Login or Password, try again.")
             }
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
          }
        });
        
        this.getPasswordField().setValue("");
        this.getReenterPassword("");
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