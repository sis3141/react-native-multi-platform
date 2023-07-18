module.exports = {
  apps: [
    {
      name: "athler",
      script: "./main.js",
      watch: ["./main.js", "../web/build/index.html"],
      interpreter: "ts-node",
      interpreter_args: "-r tsconfig-paths/register",
    },
  ],
};
