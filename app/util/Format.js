/**
 *  utility functions for formatting dates, phone number, currency, etc throughout the app.
 */
Ext.define("TriNet.util.Format", {

    singleton: true,
    alternateClassName: "TriNet.Format",

    /**
     * formats string representing numerical data from the server
     * 
     * @param {string|Number} value to format
     * @param {string|Number} decimal places 
     * @param {string|Number} character to use for decimal 
     * @param {string|Number} character to use for thousands seperator
     * @param {Boolean} true to use "$" 
     * @returns {string} formatted monetary value
     */
   formatCurrency: function(n, c, d, t, withDollar) {
       //use:  formatCurrency(150000, 2, ",", ".", true);
       //$150,000.00
       
       //handles case where n = 0
       if(n == 0){
           var val = (withDollar? "$": "")+'0.00';
           return val
       }
       
       var c = isNaN(c = Math.abs(c)) ? 2 : c, 
           d = d == undefined ? "," : d, 
           t = t == undefined ? "." : t, 
           s = n < 0 ? "-" : "", 
           i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
           j = (j = i.length) > 3 ? j % 3 : 0;
           if(!n) {
              n = 0;
           }
           var curVal = 0;
           if(n > 0) {
               curVal = s + (withDollar? "$": "")
               + (j ? i.substr(0, j) + t : "") 
               + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) 
               + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
           } 

           return  curVal; 
   },
    
   /**
    * formats string representing phone number
    * 
    * @param {string|Number} value to format
    * @returns {string} formatted phone number
    */
   formatPhone: function(phone) {
       var formattedPhone = phone;
       if(phone && phone.length >= 10) {
           var n1 = phone.substr(0, 3),
           n2 = phone.substr(3, 3),
           n3 = phone.substr(6, 4);
           formattedPhone = n1 + "-" + n2 + "-" + n3;
       }
       return formattedPhone;
   },

   /**
    * formats string representing date from the server
    * 
    * @param {string|Number} value to format
    * @param {string|Number} format representing the date input 
    * @param {string|Number} the desired output format 
    * @returns {string} formatted date value
    */
   reFormatDate: function(date, inFormat, outFormat) {
       //date is string
       if(date && typeof date === 'string') {
           var dt = Ext.Date.parse(date, inFormat);
           if(!dt) {
        	   dt = new Date(date);
           }
           var ndt = Ext.Date.format(dt, outFormat);
           return ndt.toUpperCase();
       } else if(date && typeof date === 'object'){
          //assume the date got is a time object
           var ndt = Ext.Date.format(dt, outFormat);
           return ndt.toUpperCase();
       } else {
           return "";
       }
   },
   
   /**
    * formats string representing hours data
    * 
    * @param {string|Number} value to format
    * @returns {string} formatted hours value
    */
   formatHours: function(v) {
       if (!v) return "";
       if (v && v.indexOf(".") < 0) {
           return v + ".00";
       }
   },
   
   /**
    * formats string representing name
    * 
    * @param {string|Number} value to format
    * @returns {string} formatted name
    */
   formatNameLastFirst: function(name) {
       var newName = name;
       if(name.indexOf(",") ){
           var arr = name.split(",");
           newName = arr[1] + "&nbsp;" + arr[0];
       }
       return newName;
       
   },
   
   /**
    * formats string representing name
    * 
    * @param {string|Number} value to format
    * @param {string|Number} number of decimal places
    * @returns {string} formatted % value
    */
   formatPercentage: function(percentage, digits){
	if(percentage){
		if(digits){
			var newPerc = percentage.toFixed(digits)+"%";
		       return newPerc
		}
		else{
			return percentage.toFixed(0)+"%";
		}
       
	}
	else{
		return "";
	}
   
   },

   /**
    * validates whether a string contains any invalid characters
    * 
    * @param {string|Number} value to validate
    * @returns {string} invalid characters or ""
    */
   invalidCharacters: function (value) {
       var invalidCharsters = '';
       if(!value) {
    	   return '';
       } 
       for (var i = 0; i <value.length;i++) {
    	   var matcher = value[i].match(/[!#$&*+,-.:;=?@~{}|_?%^()"'<>]/);
    	   if(matcher){
    		   invalidCharsters += value[i];
    	   }
           /*if( !value[i].match(/^[a-z0-9\s!#$&*+,-.:;=?@~]+$/i) ) {
                invalidCharsters += value[i]
           }
           */
       }
       return invalidCharsters;       
   }

});