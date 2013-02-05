/*==================================================

Author         : Mobilezapp.
Date           : 13/JUN/2012.

Type           : Store, Required to handle the component data for the User Profile(About Me).
Summary        : This File provides components data in User Profile(About Me). . 

Parameter1     : NULL. 
Parameter2     : NULL.


return value   : NULL. 
==================================================*/
Ext.define( "TriNet.store.AboutMe", {
    //extend   : "Ext.data.Store",
    extend: "TriNet.store.TriNetStore",

    config : {
        model        : "TriNet.model.AboutMe",
        serviceName  : "workprofile",
        storeId      : "aboutMe",
        rootProperty : ""
    }

});