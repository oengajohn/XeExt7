Ext.define('TutorialApp.view.users.UserFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userformcontroller',
    /**
     * Called when the view is created
     */
    init: function() {},
    onUserFormSubmit: function() {
        var me = this,
            form = me.getView().lookupReference('form').getForm();
        var id = form.findField('id').getValue();
        var method = 'POST';
        var url = baseUrl + 'users';
        if (id) {
            method = 'PUT';
            url = url + '/' + id
        }
        if (form.isValid()) {
            form.submit({
                url: url,
                waitMsg: 'Please wait...',
                method: method,
                success: function(form, action) {
                    console.log(action.result);
                },
                failure: function(form, action) {
                    console.log(action.result);
                }
            });
        }
    },
    onUserFormCancel: function() {
        this.getView().close();
    }
});