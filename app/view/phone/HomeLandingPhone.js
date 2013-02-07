
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
        style: 'background:#D4D3D2',
	 items: [
	  {
	    xtype: 'toptoolbarphone'
	   },
	    {
		xtype: 'panel',
		height: '75px',
		//style: 'background:#E3D6BF',
		cls: 'toolbarGradient',
		layout: {
		    type: 'hbox',
		    align: 'center',
		    pack: 'start'
		},
		items: [
		    {
			xtype: 'spacer'
		    }, 
		     {
			xtype: 'button',
			itemId: 'howitworksbtn',
			text: 'How It Works',
			width: '45%',
			ui: 'confirm'
		    },
		    {
			xtype: 'spacer'
		    },
		   
		    {
			xtype: 'button',
			itemId: 'ordernowbtn',
			text: 'Sign Up!',
			width: '45%',
			ui: 'confirm'
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
		    '<h1>We <a class="greenLinktext">&hearts;</a> Smoothies</h1>'+
		    
		   
		     '<p><b>Green Smoothie Monster</b> delivers fresh green smoothies to homes and offices every morning in San Francisco.</p>'+
		     '<div align="center"><img src="lib/green-smoothie1.jpg" width="200px"class="smoothieImg"></img></div>'+
		   
		   '<br>'+
		     '<p>These smoothies are made fresh daily and jam packed with organic fruits and vegetables.<p>'+
		     '<p>We send pick up your used smoothie jars on your next order and clean them to be used again!</p><br>'+
		     
		    
		    '<p style="text-align:center;"><a href="#ordernow" class="greenLinktext">Sign up for smoothie delivery now!</a></p>'+
		
		    '<p style="text-align:center;">or</p>'+
		    
		    '<p style="text-align:center;"><a href="#howitworks" class="greenLinktext">See how it works</a></p>'+
		'</div>'
             }
        ]
    }  
});
