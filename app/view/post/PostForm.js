Ext.define('XeExt7.view.post.PostForm', {
    extend: 'Ext.window.Window',
    xtype: 'postform',
    controller: 'postformcontroller',
    autoShow: true,
    modal: true,
    title: 'Post Form',
    shadow: true,
    closable: true,
    width: 600,
    layout: 'fit',
    items: [{
        xtype: 'form',
        reference: 'form',
        jsonSubmit: true,
        defaults: {
            xtype: 'textfield',
            allowBlank: false,
            anchor: '100%'
        },
        items: [{
                name: 'id',
                fieldLabel: 'Post ID',
                readOnly: true,
                allowBlank: true,
                xtype: 'numberfield'
            },
            {
                fieldLabel: 'User ID',
                name: 'userId',
                xtype: 'numberfield'
            },
            {
                name: 'title',
                fieldLabel: 'Title',
            },
            {
                name: 'body',
                fieldLabel: 'Body',
                grow: true,
                xtype: 'textarea'
            },

        ],
        buttons: [{
                text: 'Save',
                formBind: true,
                handler: 'onFormSubmit'
            },
            {
                text: 'Cancel',
                handler: 'onFormCancel'
            }
        ]

    }]
});