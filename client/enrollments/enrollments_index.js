Template.enrollmentsIndex.rendered = function() {
};

Template.enrollmentsIndex.helpers({
  sayHello: function () {
    return "Hallo!";
  }
});

Template.enrollmentsIndex.events ({
  'click .delete-enrollment': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("确定?")) {
    Enrollments.remove(item._id);
      console.log("Deleted!")
    }
  }
});
