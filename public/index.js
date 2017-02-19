((setFeatures) => {
  const onerror = document.getElementById('script-oc-registry-base-url').getAttribute('data-onerror') === 'true';
  if (onerror) {
    document.getElementById('error-message').classList.remove('hide');
  }

  // doc: https://github.com/ericelliott/feature-toggle
  const feature = setFeatures();
  if (feature.active('show-apod-explanation')) {
    document.getElementsByClassName('Message hide')[0].classList.remove('hide');
  }
})(window.setFeatures);
