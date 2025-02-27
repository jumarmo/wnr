const builder = require('electron-builder')
const Platform = builder.Platform

require("./env_commit")

const config = {
    "directories": {
        "output": "packaged/"
    },
    "mac": {
        "asarUnpack": [
            "./node_modules/node-notifier/vendor/**",
            "./res/icons/**"
        ],
        "target": [
            "dmg"
        ],
        "icon": "res/icons/iconMac.icns",
        "darkModeSupport": true,
        "files": [
            "**/*",
            //! to exclude
            "!res/icons/*Win*",
            "!res/icons/*.psd",
            "!./node_modules/node-notifier/vendor/snoreToast/**"
        ]
    },
    "dmg": {
        "icon": "res/icons/iconMac.icns",
        "backgroundColor": "#fefefe",
        "artifactName": "${productName}-${version}-MacOS.${ext}"
    },
    "publish": null
}

builder.build({
    targets: Platform.MAC.createTarget(),
    config,
})
    .then(m => {
        console.log("Done!")
    })
    .catch(e => {
        console.error(e)
    })