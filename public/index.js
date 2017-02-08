((falcor) => {
  const model = new falcor.Model({ source: new falcor.HttpDataSource('/model.json') });
  model
    .get('greeting')
    .then((response) => {
      document.getElementById('greeting').innerHTML = response.json.greeting;
    });
})(window.falcor);

