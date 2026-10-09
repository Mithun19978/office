var driver_serverApiUrl = 'https://mithun.innait.com/idam-gateway';
var driver_projectId    = 'community';
var driver_clientId     = '6ac7a1362a63020bdd6e77c9'; 
var driver_clientSecret = 'rBU4hQwnbhq9nCYASFFrnWpUmMlE1JcJbFLKfRdKP5Y';
var driver_redirectUri  = 'https://mithun19978.github.io/office/index.html';

var driver_serverEventSourceUrl;
var driver_serverWsUrl;
var driver_serverBase;

(function init() {
  function trimRight(s) { return String(s || '').replace(/\/+$/, ''); }
  if (!driver_serverApiUrl) driver_serverApiUrl = window.location.origin;

  driver_serverBase = trimRight(driver_serverApiUrl);
  driver_serverEventSourceUrl = driver_serverBase + '/app/device/createSSESource';
  driver_serverWsUrl          = driver_serverBase.replace(/^http/, 'ws') + '/ws';
})();
