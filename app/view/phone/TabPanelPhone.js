
Ext.define("Gsm.view.phone.TabPanelPhone", {
    extend: "Ext.Panel",
    xtype: "tabpanelphone",
    requires: [
               'Ext.MessageBox',
               'Ext.Button',
              'Ext.Toolbar'
               ],
    config: {
	fullscreen: true,
    layout: {
	type: 'card'
    },
    items: [
	{
	    xtype: 'homelandingphone'
	},
        {
            xtype: 'howitworksphone'
        },
	{
	    xtype: 'ordernowphone'
	}
    ]
    }  
});
