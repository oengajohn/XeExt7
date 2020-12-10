Ext.define('XeExt7.view.user.UserGridController',{
    extend: 'Ext.app.ViewController',
    alias:'controller.usergridcontroller',
    mixins:[
        'XeExt7.view.commons.GridMixin'
    ],

    onAddNew:function(){
        Ext.create({
            xtype:'userform'
        });
    },
    onRemoveSelected:function(){
        var me=this;
        var grid= me.getView();
        var record= me.getSelectedRecord(grid);
        if(record){
            console.log(record.get('id'));
        }
        
    },
    onViewDetails:function(){
        var me=this;
        var grid= me.getView();
        var record= me.getSelectedRecord(grid);
        if(record){
          var window=  Ext.create({
                xtype:'userform'
            });
            window.lookupReference('form').getForm().loadRecord(record);
        }
   }

})