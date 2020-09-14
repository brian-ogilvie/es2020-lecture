importScripts('./GlobalModule.js');

onmessage = function (event) {
  switch (event.data) {
    case 'logGlobalObject':
      self.logGlobalObject();
      return;
    default:
      return;
  }
};
