Ext.Loader.setPath({
    'Ext': 'touch/src'
    //'TMAPP': 'app'
});

Ext.application({
	
    name: 'Gsm',

    requires: [
        'Ext.MessageBox',
    ],
    profiles: ['Phone'
	      // 'Tablet'
	       ],
    
    views: [
            
            ],

    controllers: [
          
    ],
    models: [
	"Day",
	"User"
    ],
    stores: [
	"Days"
    ],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
   
    launch: function() {
	
	//initialize parse 
	Parse.initialize("2KYJ5stmk47JDT7yTP3StxkjgRgygrdYiSMZ6vIx", "RxKlU1z4tccBRnIxZuHvplgcQeRRt8yVlyZEm5cp");
	
	//hide the initial load mask
        Ext.get(Ext.DomQuery.select('.bokeh')[0]).destroy();
	
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    
  
});
