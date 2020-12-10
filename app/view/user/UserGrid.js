Ext.define('XeExt7.view.user.UserGrid',{
    extend:'Ext.grid.GridPanel',
    xtype:'usergrid',
    controller:'usergridcontroller',
    //store,
    //columns
    store:{
        type:'users'
    },
    layout:'fit',
    loadMask: true,
    selModel: {
        injectCheckbox: 'first',
        checkOnly: false,
        model: 'MULTI',//SINGLE,SIMPLE
        type: 'checkboxmodel',
    },
    tbar:[
        {
            // xtype:'button',
            text:'Add User',
            iconCls:'fa fa-plus-circle',
            handler:'onAddNew'
        },
        {
            // xtype:'button',
            text:'View Details',
            iconCls:'fa fa-pencil-circle',
            handler:'onViewDetails'
        }
        , {
            // xtype:'button',
            text:'Remove Selected',
            iconCls:'fa fa-minus-circle',
            handler:'onRemoveSelected'
        }
    ],
    columns:[
        {text:'USER ID',dataIndex:'id',flex:1},
        {text:'NAME',dataIndex:'name',flex:2},
        {text:'USERNAME',dataIndex:'username',flex:2},
        {text:'COMPANY NAME',dataIndex:'company.companyName',flex:3}
    ]



})