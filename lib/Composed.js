// Generated by CoffeeScript 1.6.2
(function() {
  var Composed, _;

  _ = require('underscore');

  Composed = (function() {
    function Composed() {}

    Composed.prototype.assign = function(clazz) {
      this.clazz = clazz;
      return this.rebuild();
    };

    Composed.prototype.rebuild = function() {
      return this.parts = _.reduce(this.raw, function(memo, component) {
        memo.push(new this.clazz(component));
        return memo;
      }, [], this);
    };

    Composed.prototype.getPart = function(index) {
      return this.parts[index];
    };

    Composed.prototype.val = function() {
      if (arguments.length === 0) {
        if (this.parts) {
          return _.map(_.flatten(this.parts), function(part) {
            return part.val();
          }).join(this.delimiter);
        } else {
          return this.raw;
        }
      } else {
        this.setVal(_.first(arguments));
        return this.rebuild();
      }
    };

    Composed.prototype.setVal = function(values) {
      return this.raw = values;
    };

    Composed.prototype.toString = function() {
      if (this.parts) {
        return _.map(this.parts, function(part) {
          return part.toString();
        }).join(this.delimiter);
      } else if (_.isArray(this.raw)) {
        return this.raw.join(this.delimiter);
      } else {
        return this.raw;
      }
    };

    return Composed;

  })();

  module.exports = Composed;

}).call(this);
