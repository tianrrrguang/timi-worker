
// root is global on the server, and window in the browser
var root = window;

// cached for performance
function noop() { }
var ObjectKeys = Object.keys;

// isArray and isObject functions
function isArray(arr) {
  return (Array.isArray(arr) && arr.length > 0);
}
function isObject(obj) {
  return (typeof obj === "object" && ObjectKeys(obj).length > 0);
}

function doEach(arr, iterator) {
  var i;
  var length = arr.length;

  for (i = 0; i < length; i++) {
    iterator(arr[i]);
  }
}

// https://github.com/caolan/async
function doOnce(fn) {
  var called = false;
  return function () {
    if (called) throw new Error("Callback already called.");
    called = true;
    fn.apply(root, arguments);
  };
}

// https://github.com/caolan/async
function _doOnce(fn) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    fn.apply(this, arguments);
  };
}

var async = {

  // runs the task on every item in the array at once
  each: function (arr, iterator, callback) {
    callback = _doOnce(callback || noop);
    var amount = arr.length;

    if (!isArray(arr)) return callback();

    var completed = 0;
    doEach(arr, function (item) {
      iterator(item, doOnce(function (err) {
        if (err) {
          callback(err);
          callback = noop;
        } else {
          completed++;
          if (completed >= amount) callback(null);
        }
      }));
    });
  },

  eachSeries : function(arr, iterator, callback) {
      callback = _doOnce(callback || noop);
      var amount = arr.length;

      if (!isArray(arr)) return callback();

      var completed = 0;
      var iterate = function() {
        iterator(arr[completed], doOnce(function(err) {
          if (err) {
            callback(err);
            callback = noop;
          }
          else {
            completed++;
            if (completed < amount) {
              iterate();
            }
            else {
              callback(null);
            }
          }
        }));
      };
      iterate();
    },

  // can accept an object or array
  // will return an object or array of results in the correct order
  parallel: function (tasks, callback) {

    var keys; var length; var i; var results; var kind;
    var updated_tasks = [];
    var is_object;
    var counter = 0;

    if (isArray(tasks)) {

      length = tasks.length;
      results = [];

    } else if (isObject(tasks)) {

      is_object = true;
      keys = ObjectKeys(tasks);
      length = keys.length;
      results = {};

    } else {
      return callback();
    }

    for (i = 0; i < length; i++) {

      if (is_object) {
        updated_tasks.push({ k: keys[i], t: tasks[keys[i]] });
      } else {
        updated_tasks.push({ k: i, t: tasks[i] });
      }

    }

    updated_tasks.forEach(function (task_object) {

      task_object.t(function (err, result) {
        if (err) return callback(err);

        results[task_object.k] = result;

        counter++;
        if (counter == length) callback(null, results);
      });

    });

  },


};

  export = async;