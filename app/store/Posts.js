Ext.define('XeExt7.store.Posts', {
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'XeExt7.model.Post',
    proxy: {
        type: 'ajax',
        url: baseUrl + 'posts',
        reader: {
            type: 'json',
            rootProperty: 'posts'
        }
    }
});