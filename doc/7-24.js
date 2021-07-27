/*
$router.history.push
HTML5History.prototype.push = function push(location, onComplete, onAbort) {
  var this$1 = this;
  var ref = this;
  var fromRoute = ref.current;
  this.transitionTo(
    location,
    function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    },
    onAbort
  );
}; */
/* 
$router.push
VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  var this$1 = this;
  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== "undefined") {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    });
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};
*/
