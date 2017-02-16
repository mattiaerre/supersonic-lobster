((setFeatures) => {
  const app = document.getElementById('app');
  if (app.dataset && app.dataset.ocRegistryBaseUrl) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `${app.dataset.ocRegistryBaseUrl}/oc-client/client.js`;
    script.onerror = () => {
      document.getElementById('error-message').classList.remove('hide');
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  // doc: https://github.com/ericelliott/feature-toggle
  const feature = setFeatures();
  if (feature.active('show-apod-explanation')) {
    document.getElementsByClassName('Message hide')[0].classList.remove('hide');
  }
})(window.setFeatures);
