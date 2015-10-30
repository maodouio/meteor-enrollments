Template.enrollmentEdit.rendered = function() {
};

Template.enrollmentEdit.helpers({
});

Template.enrollmentEdit.events({
});

AutoForm.hooks({
  'enrollmentForm': {
    before: {
      update: function(doc) {
        doc.updatedAt = new Date();
        return doc;
      }
    },
    onSuccess: function(operation, result,template) {
      console.log('修改成功!');
      Router.go('enrollmentsIndex', {_id: result});
    },

    onError: function(operation, error, template) {
      console.log('修改失败');
    }
  }
});
