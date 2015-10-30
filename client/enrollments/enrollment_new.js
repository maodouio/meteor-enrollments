Template.enrollmentNew.rendered = function() {
};

Template.enrollmentNew.helpers({
});

Template.enrollmentNew.events ({
});

AutoForm.hooks({
  'enrollmentForm': {
    before: {
      insert: function(doc) {
        doc.createdAt = new Date();
        return doc;
      }
    },
    onSuccess: function(operation, result,template) {
      console.log('您已成功报名!');
      Router.go('enrollmentsIndex', {_id: result});
    },

    onError: function(operation, error, template) {
      console.log('失败');
    }
  }
});
