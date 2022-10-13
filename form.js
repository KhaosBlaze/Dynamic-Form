Vue.use(VueForm, {
	inputClasses: {
  	valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
});

var router = new VueRouter({
  mode: 'history',
  routes: []
});

var app = new Vue({
  router,
  el: '#app',
  data: {
	formEnabled: false,
    formstate: {},
    model: {
      name: '',
      email: '',
      buildingNumber: '',
      unitNumber: '',
    },
	location: {
	  name: '',
    },
    submit: false
  },
  created() {
	  //Verify this is a valid property
	  this.location = { name: this.$route.query.location };
  },

  methods: {
    onSubmit: function() {
	  this.submit = true;
	  this.submitMessage = this.model;
	  this.submitMessage.toAddress = "desired-admin@domain.com";
    }
  }
});
