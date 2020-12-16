Ext.define('XeExt7.model.Post', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'body', type: 'string' },
        { name: 'userId', type: 'int' }
    ]
});