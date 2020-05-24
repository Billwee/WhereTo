var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var vacationSchema = new Schema({
  tripName: String,
  dateStart: Date,
  endDate: Date,
  city: String,
  state: String,
  boating: String,
  fishing: String,
  hiking: String,
  beach: String,
  concert: String,
  sports: String,
  theatre: String,
  sightseeing: String,
  breakfast: String,
  dinner: String,
  dessert: String,
  drinks: String,
  foodType: String,
  sightseeing: [String],
  food: [String],
  events: [String],
  outdoors: [String],
  local: Boolean
});

// This creates our model from the above schema, using mongoose's model method
var Vacation = mongoose.model("Vacation", vacationSchema);

// Export the Note model
module.exports = Vacation;
