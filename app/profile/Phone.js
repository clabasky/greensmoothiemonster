Ext.define('Gsm.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Phone',
        views: [
            
                'TabPanelPhone',
                'HomeLandingPhone',
                'HowItWorksPhone',
                'OrderNowPhone',
                'TopToolbarPhone',
		'LoginPopup'],
        controllers: [
            'ApplicationPhone',
	    'Login'
        ]
    },

    isActive: function() {
        return true//Ext.os.is.Phone;
    },
    
    launch: function() {
          
        Ext.Viewport.setActiveItem({xtype: "tabpanelphone"});
	Gsm.app.redirectTo('home');
    },
});