/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
var baseUrl;
Ext.define('XeExt7.Application', {
    extend: 'Ext.app.Application',

    name: 'XeExt7',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    launch: function() {
        Ext.tip.QuickTipManager.init();
    }
}, function() {
    baseUrl = 'http://localhost:8080/Jotech/api/';
});