
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
           homeBtn:       'button[itemId="homebtn"]',
           
           chooseDaysBackBtn: 'button[itemId="chooseDaysBackBtn"]',
           
           chooseDaysList: 'panel[itemId="chooseDaysPanel"] > list'
           
           
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
            },
    
            chooseDaysBackBtn: {
                tap: 'chooseDaysBackBtnTap'
            },
            
            chooseDaysList: {
                itemtap: 'chooseDaysItemTap'
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
    },
    homeBtnTap: function(){
        Gsm.app.redirectTo('home');  
    },
     //go to how it works stuff
     howitworksRoute: function(){
        this.getTabPanelPhone().setActiveItem(this.getHowItWorksPhone());
     },
     howItWorksBtnTap: function(){
        Gsm.app.redirectTo('howitworks');
     },
     
     //go to order now stuff
     ordernowRoute: function(){
        this.getTabPanelPhone().setActiveItem(this.getOrderNowPhone());
        
        //create the list of possible delivery days
        this.getDeliveryDays();
     },
     orderNowBtnTap: function(){
         Gsm.app.redirectTo('ordernow');
     },
     
     getDeliveryDays: function(){
       
       var futureDays = 30;
       
       var days = [];
       for(var i=1; i<futureDays; i++){
            var day = moment().add("days",i);
            var formatted = day.format("ddd");
            if(formatted != "Sat" && formatted != "Sun"){
                
                var freshDay = day.format("dddd");
                var freshMonth = day.format("MMM");
                var freshDom = day.format("Do");
                
                days.push({
                    "day":freshDay,
                    "month":freshMonth,
                    "dom": freshDom
                          });  
            }
       }
       Ext.getStore('daysStore').setData(days);
     },
     
     chooseDaysItemTap: function(list, index, target, record, e, eOpts){
        var selected = record.getData().selected;
        
        if(selected == false){
            record.set("selected", true);
        }
        else{
            record.set("selected", false);
        }
     },
     
     chooseDaysBackBtnTap: function(){
         history.back();
     }
     
     
 });