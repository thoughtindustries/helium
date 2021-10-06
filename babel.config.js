const BABEL_ENV = process.env.BABEL_ENV
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === "cjs"
const isESM = BABEL_ENV !== undefined && BABEL_ENV === "esm"

module.exports = {
    presets: [
        [
          "@babel/preset-env",
          {
            loose: true,
            modules: isCommonJS ? "commonjs" : false,
            targets: {
              esmodules: isESM ? true : undefined,
            },
          },
        ], 
        '@babel/preset-react', 
        '@babel/preset-typescript'
    ],
};