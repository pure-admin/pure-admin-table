// commitlint uses `ts-node` to load typescript config, it's too slow. So we replace it with `esbuild`.
require("@esbuild-kit/cjs-loader");
// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require("./commitlint.config.ts").default;
