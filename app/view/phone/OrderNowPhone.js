
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
	//scrollable: true,
        itemId:'ordernowphone',
        //style: 'background:white',
        items: [
	   /* {
		xtype: 'panel',
		itemId: 'orderIntro',
		items: [
		     {
			xtype: 'toptoolbarphone'
		       },
		    {
			xtype: 'toolbar',
			items: [
			    {
				xtype: 'button',
				text: 'Back',
				ui: 'back',
				itemId: 'orderIntroBackBtn'
			    },
			    {
				xtype: 'spacer'
			    },
			    {
				xtype: 'button',
				text: 'Next',
				itemId: 'orderIntroNextBtn',
				ui: 'confirm',
				width: '100px'
			    }
			]
		    }
		]
	    },
	    */
	    {
		xtype: 'panel',
		layout: {
		    type: 'fit'
		},
	        itemId: 'chooseDaysPanel',
		items: [
		    
			{
			xtype: 'toolbar',
			docked: 'top',
			items: [
			    {
				xtype: 'button',
				text: 'Back',
				ui: 'back',
				itemId: 'chooseDaysBackBtn'
			    },
			    {
				xtype: 'spacer'
			    },
			    {
				xtype: 'button',
				text: 'Next',
				itemId: 'chooseDaysNextBtn',
				ui: 'confirm',
				width: '100px'
			    }
			]
		    },
		    {
			xtype: 'panel',
			docked: 'top',
			html: 'Select smoothie delivery days (discounts for bulk orders!)'
		    },
		    {
			xtype: 'list',
			store: 'daysStore',
			itemTpl: new Ext.XTemplate(
				'{day}, {month} {dom}',
				'<br>',
				'{selected}'
			
			)
		    }
		    
		]
	    }
	    
        ]
    }  
});
