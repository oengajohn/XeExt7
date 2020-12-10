/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */

Ext.application({
    extend: 'XeExt7.Application',

    name: 'XeExt7',

    requires: [
        // This will automatically load all classes in the XeExt7 namespace
        // so that application classes do not need to require each other.
        'XeExt7.*'
    ],

    // The name of the initial view to create.
    mainView: 'XeExt7.view.main.Main'
});
