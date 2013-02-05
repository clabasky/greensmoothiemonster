
Ext.define("Gsm.view.phone.OrderNowPhone", {
    extend: "Ext.Panel",
    xtype: "ordernowphone",
    requires: [
               'Ext.MessageBox',
               'Ext.Button',
              'Ext.Toolbar'
               ],
    config: {
	layout: {
	    type: 'card'
	},
	scrollable: true,
        itemId:'ordernowphone',
        style: 'background:white',
        items: [
	    
	    {
		xtype: 'panel',
		items: [
		    {
			xtype: 'toolbar',
			docked: 'top',
			items: [
			    {
				xtype: 'button',
				text: 'Back',
				ui: 'back',
				handler: function(){
				    history.back();
				}
			    },
			    {
				xtype: 'spacer'
			    },
			    {
				xtype: 'button',
				text: 'Next',
				itemId: 'order1next',
				ui: 'confirm',
				width: '100px'
			    }
			]
		    },
	
	   {
		xtype: 'panel',
		items: [
		    {
			xtype: 'panel',
			html: 'Choose your smoothie type:'
		    },
		    {
			xtype: 'panel',
			layout: {
			    type: 'hbox'
			},
			items: [
			    {
				xtype: 'panel',
				html: 'More Berries (sweeter)'
			    },
			    {
				xtype: 'panel',
				html: 'More Veggies (healthier)'
			    }
			]
		    },
		    {
			xtype: 'panel',
			height: '150px',
			html: 'pic of smoothie goes here'
		    },
		    {
			xtype: 'fieldset',
			items: [
			    {
				xtype: 'sliderfield',
				labelWidth: '0%',
				value: 50,
				minValue: 0,
				maxValue: 100
			    }
			]
		    }
		    
		]
	   }
	   
		]
	    },
	    {
		xtype: 'panel',
		html:'choose days',
	    }
	    
        ]
    }  
});
