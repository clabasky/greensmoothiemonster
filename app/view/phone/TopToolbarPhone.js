
Ext.define("Gsm.view.phone.TopToolbarPhone", {
    extend: "Ext.Panel",
    xtype: "toptoolbarphone",
    requires: [
           'Ext.Panel'
               ],
    
    config: {
	
        itemId:'toptoolbarphone',
	height: "100px",
	layout: {
	    type: 'hbox',
	    pack: 'start',
	    align: 'stretch'
	},
        items: [
	    {
		xtype: 'panel',
		html: '<div class="monsterdiv"><img class="monsterimg" src="lib/greenmonster.gif"></img></div>'+
			'<div class="righttitle" >Green<br>Smoothie<br>Monster.com</div>',
		//height: "120px",
		style: 'background:#06911F'
	    },
	    
	    {
		xtype: 'panel',
		height: '120px',
		cls: 'toptoolbargradient',
		html: '<div class="toolbarLoginDiv"><a href="#login" class="signinsignupbtn">Sign In/<br>Sign Up</a></div>',
		width: '100%'
	    }
        ]
    }  
});
