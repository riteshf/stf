require('./device-control.css')

module.exports = angular.module('device-control', [
  require('stf/device').name,
  require('stf/control').name,
  require('stf/screen').name,
  require('stf/sprintf').name
])
  .run(["$templateCache", function ($templateCache) {
    $templateCache.put('control-panes/device-control/device-control.jade',
      require('./device-control.jade')
    )
  }])
  .controller('DeviceControlCtrl', require('./device-control-controller'))
