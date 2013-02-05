
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
        style: 'background:white',
	html:'<h1>How It Works~ (Eat healthy and eliminate packaging waste)</h1>'+	
		'<br>'+
		'<p>1. <a href="#ordernow">Choose your green smoothie!</a> Smoothies are dropped off in your company\'s kitchen every morning.</p>'+
		'<br>'+
		'<p>2. Enjoy your delicious green smoothie </p>'+
		'<br>'+
		'<p>3. When you\'re finished, wash out your container and put it back in the box where you found it. We pick up and clean our smoothie jars every day, eliminating packaging waste.</p>',
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
			text: 'Order Now',
			width: '45%'
		    },
		    {
			xtype: 'spacer'
		    }
		]
	   }
        ]
    }  
});
