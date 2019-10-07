(function() {
  const { hash } = window.location;
  const paths = [];

  paths[""] = routes.login;
  paths["#/login"] = routes.login;
  paths["#/signup"] = routes.signup;
  paths["#/game"] = routes.game;

  paths[hash]();
})();
