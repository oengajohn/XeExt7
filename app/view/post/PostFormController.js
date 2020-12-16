Ext.define('XeExt7.view.post.PostFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postformcontroller',
    /**
     * Called when the view is created
     */
    init: function() {},
    onFormSubmit: function(btn, e, eOpts) {
        var me = this,
            window = me.getView(),
            form = window.lookupReference('form').getForm(),
            id = form.findField('id').getValue();
        var method = 'POST',
            url = baseUrl + 'posts';
        if (id) {
            method = 'PUT';
            url = url + '/' + id
        }
        if (form && form.isValid()) {
            form.submit({
                url: url,
                method: method,
                waitMsg: 'Please wait....',
                success: function(form, action) {
                    //display message
                    Ext.toast({
                        html: 'Data Saved',
                        title: 'Success',
                        width: 200,
                        align: 't'
                    });
                    // reload the grid
                    var postGrid = Ext.ComponentQuery.query('postgrid')[0];
                    postGrid.getStore().reload();
                    // close window
                    window.close();

                },
                failure: function(form, action) {
                    switch (action.failureType) {
                        case Ext.form.action.Action.CLIENT_INVALID:
                            Ext.Msg.alert(
                                'Failure',
                                'Form fields may not be submitted with invalid values'
                            );
                            break;
                        case Ext.form.action.Action.CONNECT_FAILURE:
                            Ext.Msg.alert('Failure', 'Ajax communication failed');
                            break;
                        case Ext.form.action.Action.SERVER_INVALID:
                            Ext.Msg.alert('Failure', action.result.msg);
                    }
                }


            })

        }


    },
    onFormCancel: function(btn, e, eOpts) {
        var me = this,
            window = me.getView(),
            form = window.lookupReference('form').getForm();
        form.reset();
    },
});