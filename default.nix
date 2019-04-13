with import <nixpkgs> {};

let jekyll_env = bundlerEnv rec {
  name = "jekyll_env";
  inherit ruby;
  gemfile = ./Gemfile;
  lockfile = ./Gemfile.lock;
  gemset = ./gemset.nix;
};
in stdenv.mkDerivation {
  name = "blog";

  buildInputs = [
    jekyll_env
    pkgs.ruby
  ];

  shellHook = ''
    jekyll serve --watch
  '';
}
