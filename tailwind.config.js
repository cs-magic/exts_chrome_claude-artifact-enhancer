const tailwindConfig = require("../../tailwind.config.js");

tailwindConfig.content.push("./src/**/*");
// tailwindConfig.prefix = "NT"; // 防止污染第三方网页

module.exports = tailwindConfig;
