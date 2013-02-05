/*==================================================

Author         : Chris Labasky.
Date           : 12/18/2012.


==================================================*/

Ext.define("Gsm.view.HowItWorksPhone", {
    extend: "Ext.Panel",
    xtype: "howitworks",
    requires: [
               'Ext.MessageBox',
               'Ext.Button',
              'Ext.Toolbar'
               ],
    config: {
	html: 'yo dog',
        monitorOrientation: true,
        itemId:'howitworks',
        style: 'background:white',
        items: [
	    {
		xtype: 'panel',
		html: 'what up'
	    }
        ]
    }  
});
