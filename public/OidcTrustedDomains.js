// Add bellow trusted domains, access tokens will automatically injected to be send to
// trusted domain can also be a path like https://www.myapi.com/users,
// then all subroute like https://www.myapi.com/useers/1 will be authorized to send access_token to.

// Domains used by OIDC server must be also declared here
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const trustedDomains = {
    default: ['https://sts-lle.atsol.com'], 
        "issuer": "https://sts-lle.atsol.com",
        "jwks_uri": "https://sts-lle.atsol.com/.well-known/openid-configuration/jwks",
        "authorization_endpoint": "https://sts-lle.atsol.com/connect/authorize",
        "token_endpoint": "https://sts-lle.atsol.com/connect/token",
        "userinfo_endpoint": "https://sts-lle.atsol.com/connect/userinfo",
        "end_session_endpoint": "https://sts-lle.atsol.com/connect/endsession",
        "check_session_iframe": "https://sts-lle.atsol.com/connect/checksession",
        "revocation_endpoint": "https://sts-lle.atsol.com/connect/revocation",
        "introspection_endpoint": "https://sts-lle.atsol.com/connect/introspect",
        "frontchannel_logout_supported": true,
        "frontchannel_logout_session_supported": true,
        "scopes_supported": ["openid", "profile", "umid", "carsid", "netid", "fsamsapi", "fstnrapi", "fstnramsapi", "Ats.ConsumerServices.Platform.Api", "Ats.FleetServices.CreditCard.WebApi", "Ats.FleetServices.CreditCard.WebApi.Tokenize", "Tokenize", "BPA", "bpa.api.gs.clientbilling", "bpa.api.cs.platepass", "BPAX", "axsisapi", "axsisapi2", "fstnramsmgmtapi", "vioinfoadminapi", "clientconfigurationapi", "fstnrsvrsapi", "SampleApi", "lockboxapi", "api/SendEmailWithAttachment", "api/SendEmail", "api/RetrieveEmailContent", "api/LogFileInformation", "api/ApplicationLog", "api/UploadFile", "api/TollRateFileUpload", "api/DownloadFile", "api/TollRateData", "api/RetriveTollRateFileList", "api/RetreiveTollRoadList", "api/RetrieveTollAuthorityList", "Authorize", "CreditCard.API.Readonly", "CreditCard.API.Private", "axsis3api", "api/ASBPush", "api/ASBPull", "MonitoredLanes.Api.Maintainer", "FieldApplicationDevices.Api.Maintainer", "ClientBilling", "Reference.API", "Reference.API.User", "Reference.API.Admin", "VerraListenerApi.Maintainer", "Chandler.Maintainer", "Nassau.Maintainer", "AxsisEncryption.Maintainer", "ConfigurationRead.Maintainer", "ConfigurationWrite.Maintainer", "ParserApi.User", "FileTransferApi.User", "Seattle.Maintainer", "ClientBilling.API", "ClientBilling.API.Callback", "ClientBilling.API.Read", "fstnrlmapi", "TollRateManagement.Rates.API", "TollManagementService.TollRateManagement", "TollKeeper.Dispute.API", "Certifications.Api.Maintainer", "Sample.Api", "ClientVideoRequests.Api.Maintainer", "usermanagerapi", "PlatePass.Dispute.API", "PlatePass.VehicleLookup.API", "fsfhsservice", "fsfhsapi", "fsamarapi", "axsistoolsapi", "TollKeeper.Reconciliation.API", "Orchestrator.Trigger", "AxsisDataInterface.TOL.Write", "AxsisDataInterface.ProcessLog.Write", "AxsisDataInterface.Procedure.Execute", "MiddlewareConfigurationServices.Read", "MiddlewareConfigurationServices.Write", "MiddlewareFileTransfer.Download", "MiddlewareFileTransfer.List", "MiddlewareFileTransfer.Delete", "MiddlewareParserService.Execute", "EnforcementScheduler.Api.Maintainer", "Cia.Scope", "ATS.Tolls.TMS.TollInfo", "TollKeeper.TMS.API", "fstollexceptions", "fstrm", "fstrmapi", "TollCoverage.API", "RenterPortal.API", "bpa.api.usb.ebill", "bpa.api.private", "gs.virusscan.api", "gs.vioinfoservices.api", "dde-api-reader", "dde-api-requester", "GS.CouponHandler", "ListsProvider.Manage", "ListsProvider.Reader", "um.api.internal.bpa", "fstnrmdmsapi", "fstnrdmsapi", "fstnrtpsapi", "um.api.internal.is", "fstnrshippingapi", "Ats.Vms.Violations.API", "CS-VMS-GRAPHQL-R", "CS-VIO-GRAPHQL-R", "CS-VIO-RestAPI-R", "um.api.internal.clientimplementation", "ReportingService.Execute", "um.api.internal.reportserver", "IntegrityService.Execute", "um.api.internal.axsis", "um.api.internal.um", "um.api.internal.ifacs", "um.api.internal.violationinfo", "um.api.internal.platepass", "offline_access"],
        "claims_supported": ["sub", "src", "/ats/usermanager/systemcode", "/ats/usermanager/rights", "/ats/usermanager/client", "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name", "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress", "userLanguageCulture", "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname", "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname", "/ats/cars/phone_number", "/ats/cars/supervisor_username", "/ats/cars/hertz_location_mailto", "/ats/cars/assigned_role", "/ats/cars/agency_id", "usertype", "/vm/aspnetidentity/client", "/vm/aspnetidentity/claims", "/vm/aspnetidentity/systemcode", "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
        "response_types_supported": ["code", "token", "id_token", "id_token token", "code id_token", "code token", "code id_token token"],
        "response_modes_supported": ["form_post", "query", "fragment"],
        "grant_types_supported": ["authorization_code", "client_credentials", "refresh_token", "implicit", "password"],
        "subject_types_supported": ["public"],
        "id_token_signing_alg_values_supported": ["RS256"],
        "token_endpoint_auth_methods_supported": ["client_secret_basic", "client_secret_post"],
        "code_challenge_methods_supported": ["plain", "S256"]
};


// config_classics: ['https://demo.duendesoftware.com'],
// config_without_silent_logine: ['https://demo.duendesoftware.com'],
// config_without_refresh_tokene: ['https://demo.duendesoftware.com'],
// config_without_refresh_token_silent_logine: ['https://demo.duendesoftware.com'],
// config_googlee: ['https://oauth2.googleapis.com', 'https://openidconnect.googleapis.com'],
// config_with_hashe: ['https://demo.duendesoftware.com'],

