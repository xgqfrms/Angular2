// Web Notification API  

// permission = default | permission = granted | permission = denied

(() => {
    // let is only available in {}
    if ("Notification" in window) {
        console.log("Web Notification API is supported by this browser!");
        let permissionx = Notification.permission;
        console.log(`permissionx = ${permissionx}`);
        if (permissionx === "denied" || permissionx === "granted") {
            return ;
        }
        // Notification.requestPermission();
        // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
        Notification
            .requestPermission()
            .then(() => {
                let notification = new Notification("Hello, world!");
                alert(notification.title);
                console.log(notification);
                console.log(notification.title);
            });
    }else{
        console.log("Your old browser doesn't support Web Notification API!");
    }
})();


/*
var myNotification = new Notification(title, options);
var options = {
      body: theBody,
      icon: theIcon
}
var n = new Notification(theTitle,options);
*/


let checkVersion = () => {
    let latestVersion = document.querySelector(".js-currentVersion").textContent;
    let currentVersion = localStorage.getItem("conciseVersion");
    if (currentVersion === null || currentVersion < latestVersion ) {
        let notification = new Notification("Hello, world!");
        localStorage.setItem("conciseVersion", latestVersion);
    }
    return latestVersion;
}
checkVersion();

let displayNotification = (body, icon, title="Web Notification API", link="www.xgqfrms.xyz", duration=5000) => {
    link = link;
    duration = duration;
    let options = {
        body: body,
        icon: icon
    };
    let n = new Notification(title, options);
    if (link) {
        n.onclick = () => {
            window.open(link);
        };
    }
    setTimeout(n.close.bind(n), duration);
}

http://www.xgqfrms.xyz/images/icon.png


function checkVersion() {
    let latestVersion = document.querySelector(".js-currentVersion").textContent;
    let currentVersion = localStorage.getItem("conciseVersion");

    if (currentVersion === null || currentVersion < latestVersion ) {
        displayNotification(
            `Click to see what's new in v${latestVersion}`,
            "http://www.xgqfrms.xyz/images/icon.png",
            "A new version of Concise is available",
            `https://github.com/xgqfrms/xgqfrms/releases/v${latestVersion}`
    );

    localStorage.setItem("conciseVersion", latestVersion);
    }
}











