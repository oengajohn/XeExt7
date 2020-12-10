Ext.define('XeExt7.store.Users',{
    extend:'Ext.data.Store',
    alias:'store.users',
    model:'XeExt7.model.User',
    proxy: {
        type: 'ajax',
        url:baseUrl+'users',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    },
    autoLoad:true,
})