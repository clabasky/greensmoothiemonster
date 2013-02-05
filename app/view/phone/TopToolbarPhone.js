
Ext.define("Gsm.view.phone.TopToolbarPhone", {
    extend: "Ext.Panel",
    xtype: "toptoolbarphone",
    requires: [
           'Ext.Panel'
               ],
    
    config: {
	
        itemId:'toptoolbarphone',
	
        items: [
	    {
		xtype: 'panel',
		html: '<div class="monsterdiv"><img class="monsterimg" src="lib/greenmonster.gif"></img></div>'+
			'<div class="righttitle" >Green<br>Smoothie<br>Monster.com</div>',
		height: "120px",
		style: 'background:green'
	    }
        ]
    }  
});
