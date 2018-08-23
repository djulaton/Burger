// import orm js file
var orm = require("../config/orm.js")

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },

    insertOne: function(value, cb) {
      orm.insertOne("burgers", value, function(res) {
        cb(res);
      });
    },
    updateOne: function(column, condition, cb) {
      orm.updateOne("burgers", column, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller
  module.exports = burger;
  