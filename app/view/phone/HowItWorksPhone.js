
Ext.define("Gsm.view.phone.HowItWorksPhone", {
    extend: "Ext.Panel",
    xtype: "howitworksphone",
    requires: [
               'Ext.MessageBox',
               'Ext.Button',
              'Ext.Toolbar'
               ],
    config: {
	scrollable: true,
        itemId:'howitworksphone',
	 style: 'background:#06911F',
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
			itemId: 'homebtn',
			text: 'Home',
			width: '45%'
		    },
		
		    {
			xtype: 'spacer'
		    },
		    {
			xtype: 'button',
			itemId: 'ordernowbtn',
			text: 'Sign Up!',
			width: '45%'
		    },
		    {
			xtype: 'spacer'
		    }
		]
	   },
	   {
             xtype: 'panel',
             html:
		'<div class="welcomeDiv">'+
		    '<h1>How It Works</h1>'+	
		    '<p>1. <a href="#ordernow" class="greenLinktext">Sign up for smoothie delivery!</a><br><br>'+
		    'Your Green Smoothie will be dropped off the next morning at your house or workplace.</p><br>'+
		    '<p>2. <a class="greenLinktext">Enjoy your smoothie. </a><br><br>'+
		    'We make our green smoothies with organic and locally grown fruits and vegetables.</p><br>'+
		    '<p>3. <a class="greenLinktext">Save the planet.</a><br><br>'+
		    'Rinse out your jar and put it back in the box where you found it. We pick up and clean our smoothie jars every day, eliminating packaging waste.</p>'+
		    
		'</div>'
             }
        ]
    }  
});
