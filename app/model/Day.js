

Ext.define( "Gsm.model.Day", {
    extend : "Ext.data.Model",
   
    config : {
        fields : [
            { name : "day",               type : "string" },
	    { name: "month",   type: 'string'},
	    { name: 'dom',  type: 'string'},
	    {name: 'selected', type: 'boolean', defaultValue: false}
           ],
       
    }
    
});