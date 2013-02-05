/**
 *    TriNet Store service
 *    creates data store at runtime
 *    retrieve store based on store Id; 
 * 
 */

Ext.define("TriNet.util.TriNetStoreService", {

     alternateClassName : [
           "TriNet.StoreService"
     ],

     singleton : true,
     
     requires: [
//                "TriNet.model.AboutMe",
//                "TriNet.model.Company",
//                "TriNet.model.Contact",
//                "TriNet.model.CompanyDirectory",
//                "TriNet.model.AccrualHistory",
//                "TriNet.model.Holiday",
//                "TriNet.model.AdminApproval",
//                "TriNet.model.LeaveTime",
//                "TriNet.model.LeaveRequestSummary",
//                "TriNet.model.LeaveRequest",
//                "TriNet.model.NonWorkWeekDay",
//                "TriNet.model.LeaveType"
     ],

     config: {
//         "aboutMe"                      : { model: "TriNet.model.AboutMe",               service: "workprofile",      rootProperty: "" },
//         "contacts"                     : { model: "TriNet.model.Contact",               service: "trinetcontacts",   rootProperty: "businessContacts"},
//         "companyDirectory"             : { model: "TriNet.model.CompanyDirectory",      service: "contacts",         rootProperty: "contacts"   },
//         "accrualHistory"               : { model: "TriNet.model.AccrualHistory",        service: "timeoff",          rootProperty: "timeOffList"},
//         "paidHolidays"                 : { model: "TriNet.model.Holiday",               service: "holidays",         rootProperty: "holidays"},
//         "adminApprovals"               : { model: "TriNet.model.AdminApproval",         service: "pendingapprovals", rootProperty: "pendingApprovals"},
//         "newLeaveRequests"             : { model: "TriNet.model.NewLeaveRequest",       service: "leaverequests",    rootProperty: "leaveRequestEntryLookupInfo"},
//         "LeaveRequestEntryLookupInfo"  : { model: "TriNet.model.LeaveRequest",          service: "leaverequests",    rootProperty: "empLeaveRequests"},

     },

     constructor: function(opts) {  
        this.initConfig(opts);
        return this;
     },

     initStores: function() {
         //create all the stores when user login
    	 TriNet.Logger.log( "init all the data stores" );
         var me =this;
         //this.getStore()
         var config = me.config;
         for(var key in config) {
             var model = me.get(key);
         }
     },
     
     lookupModel: function( storeId) {
         var me = this;
         var mapping = this.get(storeId);
         return mapping || {};
     },
     
     getStore: function(storeId) {

         var me = this;
         var store = Ext.StoreMgr.get(storeId);
         if(store) {
              return store;
         }
         var mconfig = this.lookupModel(storeId); 
         var model = mconfig.model;
         if(!store) {
             store = Ext.create("Ext.data.Store", { 
                 storeId: storeId,
                 clearOnPageLoad: true,
                   model: model 
             });
         }
         var companyId = TriNet.Settings.getCompanyId();
         var userToken = TriNet.Settings.getUserToken();
         var url = TriNet.Settings.getServiceUrl();
         var serviceName =  mconfig.service || "";
         var proxyType = mconfig.type || "ajax";
         var rootProperty = mconfig.rootProperty || "";
         var proxy = {
                 type   : proxyType,
                 url    : url + serviceName,
                 headers: {
                        Accept: "application/json",
                        companyId: companyId,
                        userToken: userToken
                 },
                 reader : {
                        type: "json",
                        rootProperty: rootProperty
                 }
         };
         store.setProxy(proxy);
         return store;

     },

     populateStore: function(storeId, data) {
         //populate store with inline data
         var me = this;
         var store = me.getStore(storeId);
         if(store) {
            store.setData(data);
         } else {
        	 TriNet.Logger.log( "no store found" );
         }
         return store;
     },
     
     /**
      * load the store passed in the config object using the defined proxy
      * 
      * @param {object} config object for data connection
      */
     loadStore: function(opts) {
         //opts has store, success, failure, params, clearOnLoad
         var me              = this;
         var storeId         = opts.store;
         var successCallback = opts.success || undefined;
         var failureCallback = opts.failure || undefined;
         var params          = opts.params  || {};
         var clearOnLoad     = opts.clearOnLoad || true;
         var mask            = opts.mask    || undefined;

         var store = Ext.StoreMgr.get(storeId);
         if(!store) {
        	 TriNet.Logger.log( "no valid store found" );
             return;
         }

         if(clearOnLoad === true) {
             store.removeAll();
         }
         
       //if the environment is set to local, grab data from json files
         if(TriNet.Settings.getEnv() == "local"){
         	var oldService = store.getServiceName();
         	var hasJson = oldService.search(/.json/);
         	if(hasJson == -1){
         		store.setServiceName(oldService+".json");
         	}
         	
         }
         
         store.load({
            params: params,
            callback: function(recs, oper, success){
                if(success === true) {
                	TriNet.Logger.log( "successfully loaded " +  storeId  + " store" );
                    if( typeof successCallback == 'function'){
                        successCallback(recs, oper);
                    } else {
                    	TriNet.Logger.log( "no valid success callback function " )
                    }
                    if(mask) {
                        TriNet.app.getController("Application").clearMask(mask);
                    }
                } else {
                	TriNet.Logger.log( "Failed Loading " + storeId + " store" );
                    var err = oper.getError();
                    var errStatus = err.status;
                    var statusTxt = err.statusText;
                    if (errStatus == '401') {
                        TriNet.app.getController('Application').timedOut();
                    } else if (errStatus == '0') {
                        Ext.Msg.alert("error", TriNet.Strings.getLogin_NoServerResponse());
                    } else if( errStatus == '400'){
                        Ext.Msg.alert("", TriNet.Strings.getLogin_NoServerResponse());
                    } else {
                        Ext.Msg.alert("error", TriNet.Strings.getLogin_NoServerResponse());
                    }
                    if(typeof failureCallback == 'function'){
                        failureCallback(recs, oper);
                    } else {
                    	TriNet.Logger.log("no valid failure callback function " )
                    }
                    if(mask) {
                        TriNet.app.getController("Application").clearMask(mask);
                    }
                }

            },
            scope: this
         }); 
     },


     /**
      * used for all ajax requests throughout app. Simply pass an object containing the 
      * api name, successCallback, failureCallback, method, params, and jsonData and the
      * function will handle the rest!
      * 
      * @param {object} config object with specific data used in ajax request
      */
     ajaxCall: function(opts) {
                  
            /* the main params to be passed to the call */
            var api             = opts.api;
            var successCallback = opts.success  || undefined;
            var jsonData        = opts.jsonData || "";
            var params          = opts.params   || {};
            var message         = opts.msg     
            /* the main params to be passed to the call */
            
            if(message){
                Ext.Viewport.setMasked({xtype: 'loadmask', message: message});
            }
            
            var method          = opts.method   || "POST";
            var failureCallback = opts.failure  || undefined;
            var companyId = TriNet.util.Settings.getCompanyId();
            var userToken = TriNet.util.Settings.getUserToken();
            var headers = {
                     Accept        : 'application/json',
                     "Content-Type": 'application/json',
                     userToken     :  userToken,
                     companyId     :  companyId
            };
            var timeout = opts.timeout || 60000;
            
            var serviceUrl = (opts.serviceUrl)? opts.serviceUrl : TriNet.Settings.getServiceUrl(); 
            var url = serviceUrl + api; 
            
            //updates serviceUrl to v1.1 for signon api
            if(api == 'signon'){
                var signOnUrl = TriNet.Settings.getSignOnUrl();
                url = signOnUrl + api;
            }
            
            //if the environment is set to local, grab data from json files
            if(TriNet.Settings.getEnv() == "local"){
            	url = url+".json";
            }
            alert("url= "+url);
         
            Ext.Ajax.request({
                url             : url,
                headers         : headers,
                timeout         : timeout,
                method          : method,
                jsonData        : jsonData,
                params          : params,
                withCredentials : false,
                useDefaultXhrHeader : false,
                success         : function(response) {
                     Ext.Viewport.setMasked(false);
                     TriNet.Logger.log( "Ajax Success loading " + api );
                     if(response.responseText) {
                     var data = Ext.decode(response.responseText);
                         if( typeof successCallback == 'function') {
                            successCallback(data);
                         } else {
                        	 TriNet.Logger.log( "please provide a valid callback" ); 
                         }
                     } else {
                         if( typeof successCallback == 'function') {
                                successCallback(response);
                             } else {
                            	 TriNet.Logger.log( "please provide a valid callback" ); 
                             }
                     }
                   
                },
                failure: function(response) {
                    Ext.Viewport.setMasked(false);
                    if(response.status == '401'){
                       
                        //check if user is accessing signon api
                        var url = response.request.options.url;
                        var isSignon = url.search("signon");
                        
                        //if not using signon api, the server has timed out, reload the app
                        if(isSignon == -1){
                        	alert(TriNet.Strings.getSessionTimeout());
                        	window.location.href = window.location.origin+window.location.pathname;
                        }
                        //else the user has entered incorrect login credentials, or they have been terminted
                        else{
                        	var sysError = Ext.decode(response.responseText).sysErrors.sysError;
                        	console.log(sysError);
                        	var invalid = sysError.search("INVALID_USER_OR_PASSWORD");
                        	//user has entered incorrect login credentials
                        	if(invalid != -1){
                                Ext.Msg.alert("",TriNet.Strings.getLogin_WrongId());
                                return;
                        	}
                        	
                        	var errorCode = sysError.search("code");

                        	if(errorCode != -1){
                        		var error = sysError.slice(errorCode+5, -1);
                        		Ext.Msg.alert("",TriNet.Strings.getLogin_ErrorCode1()+ error + TriNet.Strings.getLogin_ErrorCode2());
                        	}
                        }
                       
                    } else if (response.status == '400') {
                        Ext.Msg.alert("", TriNet.Strings.getLogin_NoServerResponse());
                    }
                    else
                        {
                        Ext.Msg.alert("", TriNet.Strings.getLogin_NoServerResponse());
                        }

                    TriNet.Logger.log( "Ajax Call Failed for " + api );
                    if(typeof failureCallback == 'function') {
                        failureCallback(response); 
                    } else {
                    	TriNet.Logger.log( "not a valid callback" );
                    }
                }
            });

     },
     
     updateRecord: function(opts) {
         var model           = opts.model;
         var service         = opts.service;
         var url             = TriNet.Settings.getServiceUrl() + service;
         var companyId       = TriNet.Settings.getCompanyId();
         var userToken       = TriNet.Settings.getUserToken();
         var successCallback = opts.success || undefined;
         var failureCallback = opts.failure || undefined;

         if (!companyId|| !userToken) {
             Ext.Msg.alert("", TriNet.Strings.getSessionTimeout());
         }
         
         model.setProxy({
             type    : "ajax",
             actionMethods : {
                    create : "POST",
                    read   : "GET",
                    update : "POST",
                    destroy: "POST"
             },
             url     : url,
             headers : {
               Accept   : "application/json",
               userToken: userToken,
               companyId: companyId
             }
          });

         model.save({
             action: "create", 
             success: function(req, resp) {
                 console.log("the instance is saved correctly");
                 //pomp the message box; redirect to the submitted pending requests page
                 if( typeof successCallback === 'function') {
                     successCallback(req, resp);
                 }
             },
             failure: function() {
                
                 if( typeof failureCallback === 'function') {
                     failureCallback();
                 }
                }
             });
     }

});