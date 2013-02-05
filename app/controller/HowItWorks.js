
Ext.define("Gsm.controller.HowItWorks", {

     extend: "Ext.app.Controller",

     requires: [
          
         ],

     config: {
         routes: {
            // aboutMe: "index"
         },
         models: [
            
         ],
         stores: [
            
         ],
         views: [
             
         ],
         refs: {
              howItWorksPhone: "howitworksphone[itemId='howitworksphone']"
         },
         
         control: {
           /*  howItWorksPhone: {
                painted: 'howItWorksPhonePainted'
            }
           
            */
         }
     },

     /**
      * check to see if we have loaded the workprofile, and call api if necessary
      * then display workprofile data on the aboutme view
      */
     index: function() {

     },
     
    
 
 });