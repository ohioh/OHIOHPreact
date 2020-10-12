module.exports = {
  "globDirectory": "src/",
  "globPatterns": [
    "**/*.{html,json,css,js}",
    "src/images/*.{jpg,png,ico}",
    "src/_mainfest.json",
  ],
  "swDest": "src/service-worker.js",
  "swSrc": "src/service-worker(base).js",
  "globIgnores": [
    "../workbox-config.js"
  ],
  "mode": "production",
  "maximumFileSizeToCacheInBytes": "300000000"
};