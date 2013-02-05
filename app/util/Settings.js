/**
 * Class to provide a single interface to the "global" configuration settings
 * for the application functionality.  It enables the configuration settings to
 * be stored outside the application source code in a simple JavaScript Object
 * Notation (JSON) file and loaded when the application starts.  This will
 * enable the dynamic configuration of the application functionality without
 * having to alter the source code implementation.
 */
Ext.define( "TriNet.util.Settings", {

    requires : [

        "TriNet.util.Strings" // For the message strings to display to the user

    ],
    alternateClassName : [

        "TriNet.Settings"

    ],
    singleton : true,

    config    : {
 //       env                : "local",
      env                : "dev",
//      env                : "qa",
//      env                : "prod",

        //service config files
        settingsUrl        : "resources/json/settings.json", // URL to load the dynamic configuration settings for the application

        //service urls used in the app
        serviceUrl         : "http://localhost/fxmobileGateway/services/v1.0/",              // Base URL for the remote server providing the application data
        signOnUrl          : "http://localhost/fxmobileGateway/services/v1.1/",
        sessionTimeout     : 500000,               // Amount of time before the current user's session expires

        //user profile settings after login
        companyId          : "",              // Identifier for the current company to be sent with every data request
        userToken          : "",               // Identifier for the current user to be sent with every data request
        userRole           : "",
        eulaAccepted       : "",
        leaveRequestModule : "",
        termed             : "",
        userInfo           : "",
        useDollar          : null
    },

    /**
     * Creates an instance of the class and initializes the getters and setters
     * for the defined class config.  Then it merges the specified config into
     * the instance and then finally loads the current configuration settings
     * from the data retrieved from the remote server.
     *
     * @param {Object} config Configuration for an instance of the class
     * @return {TriNet.util.Settings}
     */
    constructor : function( config ) {

        // Required to setup the getters and setters for the configs.
        this.initConfig( config );

        // Return a reference to this instance of the class.
        return this;

    }, // End of Method - constructor()

    isEmployee: function() {
        var is = false;
        var role = this.getUserRole();
        if(role == 'user') {
            is = true;
        }
        return is;
    },

    isManager: function() {
        var is = false;
        var role = this.getUserRole();
        if(role == 'user, manager') {
            is = true;
        }
        return is;
    },

    /**
     * Loads the application configuration settings from the remote server.
     * This enables the application to to be reconfigured dynamically by simply
     * changing the configuration settings on the remote server.  If the
     * application fails to load the configuration settings from the remote
     * server successfully, it will use the default configuration settings
     * specified here.
     */
    load : function() {

        // Request the configuration settings from the application server.
        
        var env = this.getEnv();
        
        if(env == "prod"){
        	
        Ext.Ajax.request( {

            url     : this.getSettingsUrl(),
            scope   : this,

            failure : function( response, options ) {
                // Inform the user of the problem.
                Ext.Msg.alert( TriNet.Strings.getSettingsLoadFailMsgTitle(),   // "Configuration Settings"
                               TriNet.Strings.getSettingsLoadFailMsgText()  ); // "Unable to load the application configuration settings from the application server.  The default configuration settings will be used."
                // Store the default configuration settings for use in
                // configuring the application functionality.
                this.setServiceUrl( "http://localhost/fxmobileGateway/services/v1.0/" );

            },

            success : function( response, options ) {

                var settings; // Reference to the current configuration settings
                var json;     // JavaScript Object Notation (JSON) string containing the configuration settings

                // Retrieve the JSON string from the HTTP response.
                json = response.responseText;

                // If the JSON string is valid...
                if ( json ) {

                    // Decode the configuration settings into an object.
                    settings = Ext.JSON.decode( "(" + json + ")" );
                    //based on the ENV to set the service url
                    var serviceUrl = "";
                    var sessionTimeout = ""; 
                    var signOnUrl  = "";
                    /*
                             //can use this to replace the switch block
                            //use the following swtich block to clarify 
                            //how the service url is set for each env
                            var vals = settings[env]; 
                            serviceUrl = vals.serviceUrl;
                            signOnUrl  = vals.signOnUrl;
                            sessionTimeout = vals.sessionTimeout;
                     */
                    
                    
                    switch (env) {
                        case "local":
                            serviceUrl = settings.local.serviceUrl;
                            signOnUrl  = settings.local.signOnUrl;
                            sessionTimeout = settings.local.sessionTimeout;
                            break;
                        case "dev":
                            serviceUrl = settings.dev.serviceUrl;
                            signOnUrl  = settings.dev.signOnUrl;
                            sessionTimeout = settings.dev.sessionTimeout;
                            break;
                        case "qa":
                            serviceUrl = settings.qa.serviceUrl;
                            signOnUrl  = settings.qa.signOnUrl;
                            sessionTimeout = settings.qa.sessionTimeout;
                            break;
                        case "prod":
                            serviceUrl = settings.prod.serviceUrl;
                            signOnUrl  = settings.prod.signOnUrl;
                            sessionTimeout = settings.prod.sessionTimeout;
                            break;
                        default:
                            break;
                    }
                    // Store the current configuration settings for use in
                    // configuring the application functionality.
                    this.setServiceUrl( serviceUrl );
                    this.setSignOnUrl( signOnUrl );
                    this.setSessionTimeout (sessionTimeout);
                    //hide the environment select field
                    Ext.ComponentQuery.query('login > selectfield[itemId="envSelectField"]')[0].setHidden(true);
                }
            }

        } );
        }
       
    }, // End of Method - load()

    /**
     * Performs an update of the headers for the proxy to transmit to the
     * remote server when requesting data to load a store.  It can be called
     * anywhere required in the application and it will verify the validity of
     * the identifiers for the headers before assigning them to the store
     * proxy.
     */
    updateStoreProxyHeaders : function() {
/*
        // Retrieve the current values for the company identifier and the user
        // token.
        var companyId = this.getCompanyId();
        var userToken = this.getUserToken();

        // If the company identifier and the user token are valid...
        if ( companyId && userToken ) {

            // for each of the stores defined in the store manager...
            Ext.StoreMgr.each( function( store, index, length ) {

                // Retrieve a reference to the proxy for the store.
                var proxy = store.getProxy();
                
                // If the proxy reference is valid...
                if ( proxy ) {
                    
                    // If the proxy contains the headers accessor method...
                    if ( "getHeaders" in proxy ) {

                        var curUrl = proxy.getUrl();
                        var serviceUrl = this.getServiceUrl();
                        if(curUrl.indexOf(serviceUrl) < 0){
                            proxy.setUrl(this.getServiceUrl() + curUrl);
                        }
                        // Retrieve a reference to the headers for the proxy.
                        var headers = proxy.getHeaders();
                        
                        // If the store proxy has headers assigned...
                        if ( headers ) {
                            // Update the company identifier and user token
                            // on the proxy header using the current values.
                            headers[ "companyId" ] = companyId;
                            headers[ "userToken" ] = userToken;

                        }

                    }

                }

            }, this );

        }
//*/
    } // End of Method - updateStores()

} );