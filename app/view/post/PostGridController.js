Ext.define('XeExt7.view.post.PostGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridcontroller',
    mixins: [
        'XeExt7.view.commons.GridMixin'
    ],

    /**
     * Called when the view is created
     */
    init: function() {
        this.loadStore();
    },
    onAdd: function(btn, e, eOpts) {
        Ext.create({
            xtype: 'postform'
        });
    },
    onViewDetails: function(btn, e, eOpts) {
        var me = this,
            grid = me.getView();
        var record = me.getSelectedRecord(grid);
        if (grid) {
            var window = Ext.create({
                xtype: 'postform'
            });
            var form = window.lookupReference('form').getForm();
            form.loadRecord(record);
        }
    },
    onRemove: function(btn, e, eOpts) {
        var me = this,
            grid = me.getView();
        var record = me.getSelectedRecord(grid);
        if (record) {
            Ext.Ajax.request({
                url: baseUrl + 'posts/' + record.get('id'),
                method: 'DELETE',
                success: function(response, eOpts) {
                    console.log(response);
                    //display message
                    Ext.toast({
                        html: 'Record Removed',
                        title: 'Success',
                        width: 200,
                        align: 't'
                    });
                    // reload the grid
                    var postGrid = Ext.ComponentQuery.query('postgrid')[0];
                    postGrid.getStore().reload();
                },
                failure: function(response, eOpts) {
                    console.log(response);
                    Ext.Msg.alert('Status', response.responseText);
                }
            })
        }
    },

});