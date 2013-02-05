/*

Author         : Mobilezapp.
Date           : 13/JUN/2012.
Type           : Model
Summary        : Handle the data provided by the service to show in the profile (About Me PAGE).
*/

Ext.define( "TriNet.model.AboutMe", {
    extend : "Ext.data.Model",
    requires: ["TriNet.util.Format"],
    
    config : {
        fields : [
            { name : "name",               type : "string" },
            { name : "type",               type : "string" },
            { name : "department",         type : "string" },
            { name : "workPhone",          type : "string" },
            { name : "workPhoneFormat",    type : "string", mapping: "workPhone", convert: function(v, rec) {
                   
                   var phone = TriNet.util.Format.formatPhone(v);
                   
                   return phone;
                
            }},
            { name : "workEmail",          type : "string" },
            { name : "workAddressLine1",   type : "string" },
            { name : "workAddressLine2",   type : "string" },
            { name : "workCity",           type : "string" },
            { name : "workState",          type : "string" },
            { name : "workPostal",         type : "string" },
            { name : "businessTitle",      type : "string" },
            { name : "serviceDate",        type : "string" },
            { name : "serviceDateFormat",  type : "string", mapping: "serviceDate", 
                convert: function(v, rec) {
                    return TriNet.Format.reFormatDate(v, "Y-m-d", "d-M-Y");
            }},
            { name : "workLocation",       type : "string" },
            { name : "employeeType",       type : "string" },
            { name : "temporaryInd",       type : "string" },
            { name : "compensationBasis",  type : "string" },
            { name : "compensationRate",   type : "string"  },
            { name : "compensationRateFormat", type: "string", mapping: "compensationRate", convert: function(v, rec) {
                 return TriNet.Format.formatCurrency(v, 2, ".", ",", true);
            }},
            { name : "standardHours",      type : "string" },
            { name : "supervisorName",     type : "string", convert: function(v, rec) {
            	
                if(v) {
                	var commInd = v.indexOf(",");
                	
                	if(commInd == 0){
                		return "";
                	}
                	else{
                        return Ext.String.trim(v);
                	}
                }else
                  return "";
                }
            },
            
            { name : "lenOfEmployment",    type : "string" },
            { name : "eeCurrencyCode",     type : "string" },
            { name : "employeeCurrencyCd", type : "string" },
            { name : "address",            type : "string", mapping: "workLocation", convert: function(v, rec) {
                      var address = v;
                      if(rec.get("workAddressLine1")) {
                          address += "\n" + rec.get("workAddressLine1"); 
                      }
                      if(rec.get("workAddressLine2")) {
                          address += "\n" + rec.get("workAddressLine2");
                      }
                      if(rec.get("workCity")){
                          address += "\n" + rec.get("workCity");
                      }
                      if(rec.get("workState")) {
                          address += ", " + rec.get("workState");
                      }
                      if(rec.get("workPostal")) {
                          address += " " + rec.get("workPostal");
                      }
                      return address;
            }}
        ],
        proxy : {
            type    : "ajax",
            url     : "workprofile",
            headers : {
                Accept       : "application/json",
                userToken    : "",
                companyId    : ""
            },
            reader  : {
                type : "json",
                rootProperty: ""
            },
            writer  : {
                type   : "json",
                encode : true
            }
        }
    }
    
});