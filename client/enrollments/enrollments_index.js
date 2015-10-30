Template.enrollmentsIndex.rendered = function() {
};

Template.enrollmentsIndex.helpers({
  sayHello: function () {
    return "Hello!";
  }
});

Template.enrollmentsIndex.events ({
  'click .delete-enrollment': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
    Enrollments.remove(item._id);
      console.log("Deleted!")
    }
  }
});
