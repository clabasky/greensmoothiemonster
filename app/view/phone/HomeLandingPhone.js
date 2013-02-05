
Ext.define("Gsm.view.phone.HomeLandingPhone", {
    extend: "Ext.Panel",
    xtype: "homelandingphone",
    requires: [
               'Ext.MessageBox',
               'Ext.Button',
              'Ext.Toolbar'
               ],
    config: {
	scrollable: true,
        itemId:'homelandingphone',
        style: 'background:white',
	 items: [
	  {
	    xtype: 'toptoolbarphone'
	   },
	    {
		xtype: 'toolbar',
		items: [
		    {
			xtype: 'spacer'
		    }, 
		     {
			xtype: 'button',
			itemId: 'howitworksbtn',
			text: 'How It Works',
			width: '45%'
		    },
		    {
			xtype: 'spacer'
		    },
		   
		    {
			xtype: 'button',
			itemId: 'ordernowbtn',
			text: 'Order Smoothies!',
			width: '45%'
		    },
		    {
			xtype: 'spacer'
		    }
		]
	    },
	     {
             xtype: 'panel',
             html: '<h1> Welcome!</h1>'+
		  
		    '<p>Green Smoothie Monster is an environmentally friendly way to get the fruits and vegetables your body needs every day!</p>'+
		
		    '<p>We deliver fresh smoothies in reusable jars to participating businesses daily in San Francisco.</p>'+
		
		    '<p><a href="#ordernow">Choose your smoothie now!</a></p>'+
		
		    'or'+
		    
		    '<p><a href="#howitworks">learn more about us</a></p>'
             }
        ]
    }  
});
