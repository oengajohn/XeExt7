Ext.define('XeExt7.view.layoutdemo.VBoxLayout', {
    extend: 'Ext.window.Window',
    autoShow: true,
    width: 800,
    xtype: 'vboxlayout',

    items: [{
        xtype: 'form',
        id: 'form',
        layout: 'fit',
        defaults: {
            xtype: 'textfield', //50%

        },

        items: [{
                fieldLabel: 'First',

            },
            {
                fieldLabel: 'Middle',
            },
            {
                fieldLabel: 'Last',
            },
            {
                xtype: 'fieldcontainer',
                fieldLabel: 'Name',
                layout: 'hbox',
                items: [{
                    xtype: 'textfield'
                }, {
                    xtype: 'textfield'
                }, {
                    xtype: 'textfield'
                }]
            }
        ]

    }]
});