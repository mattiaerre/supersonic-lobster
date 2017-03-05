(() => {
  const onerror = document.getElementById('script-oc-registry-base-url').getAttribute('data-onerror') === 'true';
  if (onerror) {
    document.getElementById('error-message').classList.remove('hide');
  }
})();
