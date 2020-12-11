Ext.define("XeExt.view.users.UserForm", {
    extend: "Ext.window.Window",
    xtype: "userform",
    controller: "userformcontroller",
    autoShow: true,
    modal: true,
    shadow: true,
    width: 600,
    layout: "fit",
    items: [{
        xtype: "form",
        layout: "form",
        reference: "form",
        jsonSubmit: true,
        items: [{
                xtype: "fieldset",
                title: "About You",
                instructions: "Tell us all about yourself",
                defaults: {
                    xtype: "textfield",
                    allowBlank: false,
                    anchor: "100%",
                },
                items: [{
                        xtype: "numberfield",
                        name: "id",
                        hidden: true,
                        allowBlank: true,
                        fieldLabel: "User Id",
                    },
                    {
                        name: "name",
                        fieldLabel: "Name",
                    },
                    {
                        name: "username",
                        fieldLabel: "User Name",
                    },
                    {
                        name: "email",
                        vtype: "email",
                        fieldLabel: "Email",
                    },
                ],
            },
            {
                xtype: "fieldset",
                title: "Address Information",
                instructions: "Tell us where we can reach you",
                defaults: {
                    xtype: "textfield",
                    allowBlank: false,
                    anchor: "100%",
                },
                items: [{
                        name: "address.street",
                        fieldLabel: "Address Street",
                    },
                    {
                        name: "address.suite",
                        fieldLabel: "Address Suite",
                    },
                    {
                        name: "address.city",
                        fieldLabel: "Address City",
                    },
                    {
                        name: "address.zipcode",
                        fieldLabel: "Address Zipcode",
                    },
                    {
                        xtype: "fieldcontainer",
                        fieldLabel: "Geo Point",
                        layout: "hbox",
                        defaults: {
                            flex: 1,
                            xtype: "numberfield",
                            allowDecimals: true,
                            // Remove spinner buttons, and arrow key and mouse wheel listeners
                            hideTrigger: true,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false,
                            allowBlank: false,
                            msgTarget: "qtip",
                        },

                        items: [{
                                name: "address.geo.lat",
                                emptyText: "lat",
                            },
                            {
                                name: "address.geo.lng",
                                emptyText: "long",
                            },
                        ],
                    },
                ],
            },
        ],
        buttons: [{
                text: "Save",
                formBind: true,
                handler: "onUserFormSubmit",
            },
            {
                text: "Cancel",
                handler: "onUserFormCancel",
            },
        ],
    }, ],
});