Template.enrolmentsIndex.rendered = function() {
};

Template.enrolmentsIndex.helpers({
  sayHello: function () {
    return "Hallo!";
  }
});

Template.enrolmentsIndex.events ({
  'click .delete-enrolment': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
    Enrolments.remove(item._id);
      console.log("Deleted!")
    }
  }
});
