/**
 * Class to provide a single interface to the strings used by the view
 * components in the application.
 */
Ext.define( "TriNet.util.Strings", {

    alternateClassName : [

        "TriNet.Strings"

    ],
    singleton : true,
    config    : {
        
         /* start global */
            /* start global loadmasks and alerts */
            logoutLoadMask           : "Logging Out",
            sessionTimeout           : "Session Timeout: You have been logged out for security reasons",    
            confirmLogout            : "Are you sure you want to logout?",
            /* end global loadmasks and alerts */
    
            /* start global components */
            logout_buttonText    : "Log Out",
            home_BtnText         : "<div class='homeIcon'></div>",
            /* end global components */
        /* end global */    
    
         /* start login */
            /*start load masks and alerts */
            login_EnvLoadmask         : "Loading Environment",
            login_NoEnvironment       : "Please select a testing environment",
            login_LoadMask            : "Logging In",
            login_MissingEnvType      : "Testing environment must be chosen to login",
            login_MissingIdType       : "ID Type must be chosen to login",
            login_EmptyId             : "Please enter your ID to log in",
            login_WrongId             : "The Custom ID or password you entered is incorrect. Please try again",
            login_NoServerResponse    : "Server is not responding. Please try again later",
            login_ErrorCode1          : "Unable to access account (Ref#",
            login_ErrorCode2          :"). Contact Solution Center (5am - 6pm Monday - Friday Pacific Time 800-638-0461)",
            /* end load masks and alerts */
            
            /*start login components */
            login_selectFieldChoose   : "Test Environment (Choose One)",
            login_selectFieldLocal    : "Local",
            login_selectFieldDev      : "Dev",
            login_selectFieldQa       : "QA",
            login_selectField1        : "ID Type (Choose One)",
            login_selectField2        : "Employee ID",
            login_selectField3        : "SSN# (US only)",
            login_selectField5        : "Custom ID",
            login_idField             : "Enter Your ID",
            login_passwordField       : "Enter Your Password",
            login_loginBtn            : "Login",
            login_forgotPassword      : "Forgot your login credentials?",
            login_termsofservice      : "The use of this mobile app is subject to the Terms and Conditions Agreement for HR Passport&reg; that you approved when you first logged on at <a href='#termsconditions' style='text-decoration:none;  color: inherit;'> www.hrpassport.com</a>",
            login_version             : "V3.3",
            /*end login components */
        /* end login */
        
        /* start forgot password */
            /* start forgot password component */
            forgotpassword_text       : '<div align="center">To obtain a new password click on the link to HR Passport below.</div><br><div align="center"><a href="#termsconditions" class="forgotLink">HR Passport</a></div><br><div align="center">Or Contact:<br>Employee Solution Center<br>5am - 6pm Monday - Friday Pacific Time<br><a href="tel:8006380461" class="phoneIcon forgotLink">800-638-0461</a><br><br><a href="mailto:employees@trinet.com" class="emailIcon forgotLink" >employees@trinet.com</a>',
            forgotpassword_backBtn    : "Back",
            /* end forgot password component */
        /* end forgot password */
            
        /* start select company */
            /* start select components */
            selectcomp_toolbarTitle   : "Welcome Back",
            selectcomp_listTitle      : "Select a Company:",
            /* end select components */
        /* end select company */
        
        /* start user landing */
            /* start components */
            userlanding_toolbarTitle  : "Welcome Back <br/> ",
            /* end components */
        /* end user landing */
        
        /* start admin landing */
            /* start components */
            adminlanding_toolbarTitle : "Welcome Back <br/> ",
            /* end components */
        /* end admin landing */
            
        /* start employee landing */
            /* start EmployeeLanding components */
            emplanding_itemTitle1     : "My Pay",
            emplanding_itemDesc1      : "View details and compare checks",
            emplanding_itemTitle2     : "My Time",
            emplanding_itemDesc2      : "Request and manage time off",
            emplanding_itemTitle3     : "My Benefits",
            emplanding_itemDesc3      : "View current elections and coverage",
            emplanding_itemTitle4     : "About Me",
            emplanding_itemDesc4      : "",
            emplanding_itemTitle5     : "Company Directory",
            emplanding_itemDesc5      : "",
            emplanding_itemTitle6     : "Contact TriNet",
            emplanding_itemDesc6      : "",
        /* end employee landing */
            
        /* start mypay */
            /* start mypay loadmask and alerts */
            mypay_LoadMask             : "Finding Checks",
            mypay_SelectAnotherChck    : "Please select another check to compare",
            mypay_TooManyChecks        : "Please select only 2 paychecks to use the paycheck comparison feature",
            /* end mypay loadmask and alerts */
           
            /* start mypay components */
            //MyPayRoll
            mypay_mainToolbarTitle     : "My Pay",
            mypay_mainText1            : "Last Paycheck Issued",
            mypay_mainText2            : "Next Paycheck",
            mypay_ViewMoreBtn          : "View More Paychecks",
            mypay_noNextCheck          : "No Future Paycheck Info",
            
            //CheckDetails and CheckDetailHeader
            mypay_chckdtlsToolbarTitle : "Check Details",
            mypay_chckdtlsBackBtn      : "Back",
            mypay_chckdtlsHeader1      : "Check #",
            mypay_chckdtlsHeader2      : "Check Date",
            mypay_chckdtlsHeader3      : "Pay End Date",
            mypay_chckdtlsColumnTitle1 : "Current",
            mypay_chckdtlsColumnTitle2 : "YTD",
            mypay_chckdtlsBoxTitle1    : "Hours &<br /> Earnings",
            mypay_chckdtlsBoxTitle2    : "Taxes",
            mypay_chckdtlsBoxTitle3    : "Before Tax Deductions",
            mypay_chckdtlsBoxTitle4    : "After Tax Deductions",
            mypay_chckdtlsBoxTitle5    : "Direct Deposit Distribution",
            mypay_chckdtlsBoxTitle6    : "Employer Paid Benefits",
            
            //MyPayRollDetails
            mypay_payrollDtlsTlbarTitle: "Payment History",
            mypay_payrollBackBtn       : "My Pay",
            mypay_payrollCmpChkBtn     : "Compare Checks",
            
            //CompareChecks
            mypay_cmpchcksBackBtn      : "Back",
            mypay_cmpchcksCancelBtn    : "Cancel",
            mypay_cmpchcksDetailBtn    : "Compare",
            mypay_cmpchcksToolbar      : "Payment History",
            
            //CompareChecksDetails  
            mypay_cmpchcksDetBackBtn   : "Back",
            mypay_cmpchcksDetVs        : "VS",
            mypay_cmpchcksDetToolbar   : "Compare Checks",    
            mypay_cmpchcksDetBoxTitle1    : "Hours &<br /> Earnings",
            mypay_cmpchcksDetBoxTitle2    : "Taxes",
            mypay_cmpchcksDetBoxTitle3    : "Before Tax Deductions",
            mypay_cmpchcksDetBoxTitle4    : "After Tax Deductions",
            mypay_cmpchcksDetBoxTitle5    : "Direct Deposit Distribution",
            mypay_cmpchcksDetBoxTitle6    : "Employer Paid Benefits",
            /* end mypay components */
        /* end mypay */
       
            
        /* start benefits */
            /* start benefits loadmask and alerts */
            benefitsLoadMask         : "Finding Benefits",
            /* end benefits loadmask and alerts */
            /* start benefits components */
            // MyBenefits
            benefits_toolbarTitle        : "My Benefits",
            benefits_emptyListText       : '<label class="simplefont">To find out about your benefit options, please contact the Trinet Solution center at </label><label id="benefitNum" class="simplefont employee_email"><a href="tel:8006380461" style="text-decoration:none">(800)638-0461</a></label><label class="simplefont"> or </label><label id="benefitlink" class="simplefont employee_email"><a href="http://www.trinet.com" style="text-decoration:none">TriNet.com</a></label>',
            
            // MyBenefitsDetails
            benefits_BackBtn             : "Benefits",
            /* end benefits components */
        /* end benefits */
        
        /* begin About me */
            /* start about me components */
            aboutme_toolbarTitle         : "About Me",
            
            aboutme_label1               : "Department",
            aboutme_label2               : "Reports To",
            aboutme_label3               : "Employee Type",
            aboutme_label4               : "Temp Indicator",
            aboutme_label5               : "Compensation",
            aboutme_label6               : "Comp Rate",
            aboutme_label7               : "Standard hours",
            
            aboutme_title1               : "Work Contact Details",
            aboutme_label8               : "Phone",
            aboutme_label9               : "Email",
            aboutme_label10              : "Address",
            
            aboutme_title2               : "Service Details",
            aboutme_label11              : "Service Date",
            aboutme_label12              : "Years of Service",
            /* end about me components */
        /* end About me */
        
        /* start contact trinet */
            /* start Contact component */
            contact_toolbarTitle         : "Contact TriNet",
            /* end Contact component */
            
        /* end contact trinet */
            settingsLoadFailMsgTitle : "Configuration Settings",
            settingsLoadFailMsgText  : "Unable to load the application configuration settings from the application server.  The default configuration settings will be used.",
            /*start of messages for the request time off */
            mytime_hoursGreaterThan         : "Hours must be greater than",
            mytime_hoursLessThan2375        : "Hours cannot be greater than 23.75",
            mytime_hoursLessThan            : "Hours cannot be greater than",
            mytime_startDateAfterEndDate    : "the request start date can not be after the end date, please select a valida date range",
            mytime_failedSaveLeaveRequest   : "The request is not saved!",
            mytime_successSaveLeaveRequest  : "The request is saved!",
            mytime_requestReceived          : "Request Received.", 
            mytime_noSupervisor             : "You do not have a supervisor assigned in the system. Please contact your manager for assistance.",
            mytime_anotherExistingRequest   : "The selected date is in another request!",
            mytime_backToMyTime             : "Are you sure you want to exit the request without saving it?",
            mytime_submitSuccess            : "See your Employee Handbook for further information. Your request may or may not be approved, based on the needs of the company and legal requirements. If you are approved for paid time off beyond your accrued amount, it will be considered a wage advance that you would need to repay if it does not fully accrue while you are employed with the company.",
            mytime_new                      : "N",
            mytime_unSubmitted              : "U",
            mytime_canceled                 : "X",
            mytime_waiting                  : "W",
            mytime_approved                 : "A",
            mytime_rejected                 : "R",
            mytime_noPendingRequests        : "No pending requests to display",
            mytime_noRejctedRequests        : "No rejected requests to display",
            mytime_noApprovedRequests       : "No approved requests to display",
            mytime_holidayAsStartDate       : "Holiday cannot be selected as start date.",
            mytime_saveRequestZeroHours     : "Total leave hours requested cannot be zero.",
            mytime_chooseAType              : "Please choose a leave type.",
            mytime_comments                 : "Comments are mandatory.",
            mytime_viaPassport              : "Request must be edited or changed via HR Passport",
            mytime_no_sufficient_info       : "We do not have sufficient information for you to submit a leave request. Please contact the TriNet Solution Center.",
            /*end of messages for request tiem off */
            
            /*** start manager approval ***/
            invalidCharacters               : "Invalid characters: ",
            manager_rejected                : "Y",
            manager_something               : "Z",
            manager_comments                         : "Comments are madatory.",
            manager_approval                         : "Your approval has been processed and the employee will be notified via their registered email.",
            manager_adminCommentPlaceHolderForReject : "You can include a comment here, which the employee will see when they receive notice that their request has been denied (required).",
            manager_adminCommentPlaceHolderForApprove: "You can include a comment here, which the employee will see when they receive notice that their request has been approved (optional).",
            manager_noPendingApprovals               : "You don't have pending approvals",
            /*** end manager approval ***/
     
            /** company directory **/
            companydirectory_shortSearchKey             : "Please specify at least 3 characters to use the search functions",
            companydirectory_noSearchResults          : "No items match your search keyword. Try searching with a different keyword"
            /** company directroy **/
       
    },

    /**
     * Creates an instance of the class and initializes the getters and setters
     * for the defined class config.  Then it merges the specified config into
     * the current instance.
     *
     * @param {Object} config Configuration for an instance of the class
     * @return {TriNet.util.Strings}
     */
    constructor : function( config ) {

        // Required to setup the getters and setters for the configs.
        this.initConfig( config );

        // Return a reference to this instance of the class.
        return this;

    } // End of Method - constructor()

} );