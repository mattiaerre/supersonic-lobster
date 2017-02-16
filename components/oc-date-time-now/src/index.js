((oc) => {
  const div = document.getElementById('date-time-now');
  setInterval(() => {
    div.innerHTML = Date.now();
  }, 1000);

  let counter = 0;
  const setCounter = () => {
    document.getElementById('spn-counter').innerHTML = counter;
  };

  setCounter();

  document.getElementById('btn-increase').addEventListener('click', () => {
    counter += 1;
    setCounter();
    oc.events.fire('oc-date-time-now:increase', counter);
  });

  document.getElementById('btn-decrease').addEventListener('click', () => {
    counter -= 1;
    setCounter();
    oc.events.fire('oc-date-time-now:decrease', counter);
  });

  oc.events.on('supersonic-lobster:counter', (e, data) => {
    counter = data;
    setCounter();
  });

  oc.events.fire('oc-date-time-now:ready');
})(window.oc);
