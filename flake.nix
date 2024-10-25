{
    description = "Flake for development of my personal portfolio site.";

    inputs = {
        nixpkgs.url = "nixpkgs";
    };

    outputs = { self, nixpkgs }: 
        let
            system = "x86_64-linux";
            pkgs = nixpkgs.legacyPackages.${system};
        in
        {
            inherit system;
            devShells.${system}.default = pkgs.mkShell {
                inherit system;
                name = "tanuki-site-shell";
                buildInputs = with pkgs; [
                    chromium
                    libimobiledevice
                    ios-webkit-debug-proxy
                ];
                shellHook = "zsh";
            };
        };
}
