
Ext.define("Gsm.view.phone.TopToolbarPhone", {
    extend: "Ext.Panel",
    xtype: "toptoolbarphone",
    requires: [
           'Ext.Panel'
               ],
    
    config: {
	
        itemId:'toptoolbarphone',
	height: "110px",
	layout: {
	    type: 'hbox',
	    pack: 'start',
	    align: 'stretch'
	},
        items: [
	    {
		xtype: 'panel',
		html: '<div class="monsterdiv"><img class="monsterimg" src="lib/greenmonster.gif"></img>'+
		'<div class="righttitle" >Green<br>Smoothie<br>Monster.com</div>'+
		'</div>',
		//height: "120px",
		style: 'background:#06911F'
	    },
	    
	    {
		xtype: 'panel',
		height: '110px',
		//cls: 'toptoolbargradient',
		html: '<div class="toolbarLoginDiv"><a href="#login" class="signinsignupbtn">Sign In</a></div>',
		width: '100%',
		style: 'background:#06911F'
	    }
        ]
    }  
});
