Ext.define('XeExt7.view.layoutdemo.HBoxLayout', {
    extend: 'Ext.window.Window',
    xtype: 'hboxlayout',
    autoShow: true,
    width: 800,
    items: [{
        xtype: 'form',
        defaultType: 'textfield',
        layout: 'hbox',
        items: [{
                fieldLabel: 'First'
            },
            {
                fieldLabel: 'Middle'
            },
            {
                fieldLabel: 'Last'
            }
        ]

    }]
});