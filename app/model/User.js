Ext.define('XeExt7.model.User',{
    extend: 'Ext.data.Model',
    fields:[
        {name:'id',type:'integer'},
        {name:'name',type:'string'},
        {name:'username',type:'string'},
        {name:'email',type:'string'},
        {name:'address.street',type:'string',mapping:'address.street'},
        {name:'address.city',type:'string',mapping:'address.city'},
        {name:'address.suite',type:'string',mapping:'address.suite'},
        {name:'address.zipcode',type:'string',mapping:'address.zipcode'},
        {name:'address.geo.lat',type:'number',mapping:'address.geo.lat'},
        {name:'address.geo.lat',type:'number',mapping:'address.geo.lat'},
        {name:'company.companyName',type:'string',mapping:'company.companyName'},
        {name:'company.catchPhrase',type:'string',mapping:'company.catchPhrase'},
        {name:'company.bs',type:'string',mapping:'company.bs'},
        {name:'phone'},
        {name:'website'}
    ]
},function(){
    console.log('user loaded');
});