Ext.define('XeExt7.view.post.PostGrid', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'postgrid',
    controller: 'postgridcontroller',
    store: {
        type: 'posts'
    },
    columns: [
        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'User ID', dataIndex: 'userId', flex: 1 },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'Body', dataIndex: 'body', flex: 3 },
    ],
    tbar: {
        overflowHandler: 'menu',
        items: [{
                text: 'Add Post',
                handler: 'onAdd',
            },
            {
                text: 'View Details',
                handler: 'onViewDetails',
            },
            {
                text: 'Remove',
                handler: 'onRemove',
            }
        ]

    },
    layout: 'fit',
    loadMask: true,

    selModel: {
        injectCheckbox: 'first',
        checkOnly: false,
        model: 'MULTI', //SINGLE,SIMPLE
        type: 'checkboxmodel',
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});