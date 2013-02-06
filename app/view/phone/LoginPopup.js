
Ext.define("Gsm.view.phone.LoginPopup", {
    extend: "Ext.Panel",
    xtype: "loginpopup",
    requires: [
           'Ext.Panel',
           'Ext.Toolbar'
               ],
    
    config: {
	
        itemId:'loginpopup',
	layout: {
	    type: 'vbox',
	    align: 'center',
	    pack: 'start'
	},
	items: [
	    {
		xtype: 'toolbar',
		docked: 'top',
		items: [
		    {
			xtype: 'button',
			itemId: 'signInBackBtn',
			ui: 'back',
			text: 'Back'
		    },
		    {
			xtype: 'spacer'
		    },
		    {
			xtype: 'button',
			itemId: 'signInBtn',
			text: 'Sign In',
			ui: 'confirm',
			width: '150px'
		   },
		   {
			xtype: 'button',
			itemId: 'signUpBtn',
			text: 'Sign Up',
			hidden: true,
			ui: 'confirm',
			width: '150px'
		   }
		]
	    },
	    {
		xtype: 'panel',
		html: '<div class="signinTopText">Sign In or Create a Green Smoothie Monster Account</div>',
		
	    },
	   
		    {
			xtype: 'textfield',
			label: 'Email',
			width: '90%'
		    },
		    {
			xtype: 'panel',
			height: '10px'
		    },
		    {
			xtype: 'fieldset',
			width: '90%',
			items: [
			    {
				xtype: 'radiofield',
				name : 'returningUser',
				value: false,
				label: 'I am a new user',
				labelWidth: '70%'
				//width: '90%'
			    },
			    {
				xtype: 'radiofield',
				itemId: 'returningUserRadio',
				name : 'returningUser',
				value: true,
				label: 'I am a returning user',
				labelWidth: '70%',
				checked: true
				//width: '90%'
			    }
			]
		    },
		    
		    {
			xtype: 'panel',
			height: '10px'
		    },
	    
		    {
			xtype: 'passwordfield',
			label: 'Password',
			itemId: 'passwordField',
			width: '90%',
			labelWidth: '40%'
		    },
		    {
			xtype: 'panel',
			height: '10px'
		    },
		    {
			xtype: 'passwordfield',
			label: 'Re-enter Password',
			itemId: 'reenterPasswordField',
			hidden: true,
			width: '90%',
			labelWidth: '50%'
		    }

	]
    }  
});
