Template.enrollmentsIndex.rendered = function() {
};

Template.enrollmentsIndex.helpers({
  sayHello: function () {
    return "Hallo!";
  }
});

Template.enrollmentsIndex.events ({
  'click .delete-enrolment': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
    Enrolments.remove(item._id);
      console.log("Deleted!")
    }
  }
});
