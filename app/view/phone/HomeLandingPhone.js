
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
		    '<h1>We <a class="greenLinktext">&hearts;</a> Earth</h1>'+
		   
		     '<p><b>Green Smoothie Monster</b> delivers fresh green smoothies in glass jars to offices and homes every morning in San Francisco.</p>'+
		     
		     '<p>We pick up your used smoothie jars on your next order and clean them to be used again!</p><br>'+
		     
		    
		    '<p style="text-align:center;"><a href="#ordernow" class="greenLinktext">Sign up for smoothie delivery now!</a></p>'+
		
		    '<p style="text-align:center;">or</p>'+
		    
		    '<p style="text-align:center;"><a href="#howitworks" class="greenLinktext">See how it works</a></p>'+
		'</div>'
             }
        ]
    }  
});
