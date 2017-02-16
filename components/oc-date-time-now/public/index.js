'use strict';

(function (oc) {
  var div = document.getElementById('date-time-now');
  setInterval(function () {
    div.innerHTML = Date.now();
  }, 1000);

  var counter = 0;
  var setCounter = function setCounter() {
    document.getElementById('spn-counter').innerHTML = counter;
  };

  setCounter();

  document.getElementById('btn-increase').addEventListener('click', function () {
    counter += 1;
    setCounter();
    oc.events.fire('oc-date-time-now:increase', counter);
  });

  document.getElementById('btn-decrease').addEventListener('click', function () {
    counter -= 1;
    setCounter();
    oc.events.fire('oc-date-time-now:decrease', counter);
  });

  oc.events.on('supersonic-lobster:counter', function (e, data) {
    counter = data;
    setCounter();
  });
  oc.events.fire('oc-date-time-now:ready');
})(window.oc);
