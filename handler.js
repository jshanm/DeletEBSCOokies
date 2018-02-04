chrome.browserAction.onClicked.addListener(DeletCookie) 
function DeletCookie()  
{  
  alert("Started");
  removeCookies(".auth.devqa.ebsco.zone");
  removeCookies(".auth.integration.ebsco.zone");
  removeCookies(".auth.ebsco.zone");
  removeCookies(".ebsco.zone");
  removeCookies(".devqa.ebsco.healthcare");
  removeCookies(".integration.ebsco.healthcare");
  removeCookies(".ebsco.healthcare");
      
}

function removeCookies(domain) {
  chrome.cookies.getAll({domain: domain}, function(cookies) {
    for(var i=0; i<cookies.length;i++) {
        console.log("Deleting Cookie: " + cookies[i].name);
        chrome.cookies.remove({url: "http://" + domain + cookies[i].path, name: cookies[i].name});
        chrome.cookies.remove({url: "https://" + domain + cookies[i].path, name: cookies[i].name});
        chrome.cookies.remove({url: "http;://www" + domain + cookies[i].path, name: cookies[i].name});
        chrome.cookies.remove({url: "https://www" + domain + cookies[i].path, name: cookies[i].name});
    }
  });
}