
Ext.define("Gsm.controller.phone.ApplicationPhone", {

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
            tabPanelPhone:   'tabpanelphone',
            
            homeLandingPhone: 'homelandingphone',
            howItWorksPhone:  'howitworksphone',
            orderNowPhone:    'ordernowphone',
            
           howItWorksBtn: 'button[itemId="howitworksbtn"]',
           orderNowBtn:   'button[itemId="ordernowbtn"]',
           homeBtn:       'button[itemId="homebtn"]'
         },
         
         control: {
            
            homeBtn: {
                tap: 'homeBtnTap'
            },
        
            howItWorksBtn: {
                tap: 'howItWorksBtnTap'
            },
            
           
            orderNowBtn: {
                tap: 'orderNowBtnTap'
            }
    
         },
        
          routes: {
            home:        "homeRoute",
            howitworks: "howitworksRoute",
            ordernow:   "ordernowRoute"
         }
     
     },
 
 
    homeRoute: function(){
         this.getTabPanelPhone().setActiveItem(this.getHomeLandingPhone());
        //Ext.ComponentQuery.query('tabpanelphone')[0].setActiveItem(Ext.ComponentQuery.query('howitworksphone')[0]);
    },
    homeBtnTap: function(){
        Gsm.app.redirectTo('home');  
    },
     //go to how it works stuff
     howitworksRoute: function(){
        this.getTabPanelPhone().setActiveItem(this.getHowItWorksPhone());
     // Ext.ComponentQuery.query('tabpanelphone')[0].setActiveItem(Ext.ComponentQuery.query('howitworksphone')[0]);
     },
     howItWorksBtnTap: function(){
        Gsm.app.redirectTo('howitworks');
     },
     
     
     
     //go to order now stuff
     ordernowRoute: function(){
        this.getTabPanelPhone().setActiveItem(this.getOrderNowPhone());
      // Ext.ComponentQuery.query('tabpanelphone')[0].setActiveItem(Ext.ComponentQuery.query('ordernowphone')[0])
     },
     orderNowBtnTap: function(){
         Gsm.app.redirectTo('ordernow');
     }
 });