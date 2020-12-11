Ext.define('XeExt7.view.user.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',
    mixins: [
        'XeExt7.view.commons.GridMixin'
    ],

    onAddNew: function() {
        Ext.create({
            xtype: 'columnlayout'
        });
        // this.showForm(null);
    },
    onRemoveSelected: function() {
        var me = this;
        var grid = me.getView();
        var record = me.getSelectedRecord(grid);
        if (record) {
            console.log(record.get('id'));
        }

    },
    onViewDetails: function() {
        var me = this;
        var grid = me.getView();
        var record = me.getSelectedRecord(grid);
        if (record) {
            me.showForm(record);
        }
    },
    showForm: function(record) {
        var window = Ext.create({
            xtype: 'userform'
        });
        if (record) {
            window.lookupReference('form').getForm().loadRecord(record);
        }
    }


})