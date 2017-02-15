((setFeatures, document) => {
  // doc: https://github.com/ericelliott/feature-toggle
  const feature = setFeatures();
  if (feature.active('show-apod-explanation')) {
    document.getElementsByClassName('Message hide')[0].classList.remove('hide');
  }
})(window.setFeatures, document);
