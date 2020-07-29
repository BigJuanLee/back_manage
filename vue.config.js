// const {
//     resolve
// } = require("core-js/fn/promise");
const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    chainWebpack: config => {
        config.resolve.symlinks(true);
        config.resolve.alias.set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("static", resolve("src/static"))
    },
    configureWebpack: {
        externals: {
            "AMap": "AMap"
        }
    }
}