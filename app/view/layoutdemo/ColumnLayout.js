Ext.define('XeExt7.view.layoutdemo.ColumnLayout', {
    extend: 'Ext.window.Window',
    xtype: 'columnlayout',
    width: '80%',
    height: 'auto',
    autoShow: true,
    items: [{
        layout: 'column',
        items: [{
            title: 'First Component width 30%',
            columnWidth: 0.30,
            layout: 'form',
            border: false,
            items: [{
                    xtype: 'datefield',
                    fieldLabel: 'Date Generated',
                    allowBlank: false,
                    name: 'schedule.dateGenerated',
                    anchor: '95%'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Date Generated',
                    allowBlank: false,
                    name: 'schedule.dateGenerated',
                    anchor: '95%'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Date Generated',
                    allowBlank: false,
                    name: 'schedule.dateGenerated',
                    anchor: '95%'
                },
            ]
        }, {
            title: 'Second Component width 40%',
            columnWidth: 0.40,
            layout: 'form',
            border: false,
            items: [{
                    xtype: 'datefield',
                    fieldLabel: 'Date Generated',
                    allowBlank: false,
                    name: 'schedule.dateGenerated',
                    anchor: '95%'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Date Generated',
                    allowBlank: false,
                    name: 'schedule.dateGenerated',
                    anchor: '95%'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Date Generated',
                    allowBlank: false,
                    name: 'schedule.dateGenerated',
                    anchor: '95%'
                },
            ]
        }, {
            title: 'Third Component width 30%',
            html: 'This is Third Component',
            columnWidth: 0.30
        }]

    }]
});