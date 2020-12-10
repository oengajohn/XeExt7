Ext.define('XeExt7.view.commons.GridMixin', {   
    getSelectedRecords:function(grid){
        var selectionModel= grid.getSelectionModel();
        if(selectionModel.hasSelection()){
           return selectionModel.getSelection();          
        }else{
            Ext.Msg.show({
                title: 'No Selection',
                msg: 'Make one Selection and try again!',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        }
    },
    getSelectedRecord:function(grid){
        var selectionModel= grid.getSelectionModel();
        if(selectionModel.hasSelection()){
           return selectionModel.getSelection()[0];          
        }else{
            Ext.Msg.show({
                title: 'No Selection',
                msg: 'Make one Selection and try again!',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        }
    }
});