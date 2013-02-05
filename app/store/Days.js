
Ext.define( "Gsm.store.Days", {
    extend   : "Ext.data.Store",
   requires: [
        "Gsm.model.Day"
   ],
    config : {
        model        : "Gsm.model.Day",
        storeId      : "daysStore",
    }

});