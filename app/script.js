/*
let ip1 = document.URL;
let fs = ip1.indexOf('/');
let ss = ip1.indexOf('/', fs+1);
let ts = ip1.indexOf('/', ss+1);
var ip = ip1.substring(0, ts+1);
//ip = "http://192.168.43.1:4000/repos/";
var page_url = ""
if(ip == "https://osalotioman.github.io"){
  location.href = "https://lecturenotes.netlify.app/"+page_url;
}
*/
let ip1 = document.URL;
// let ipep = ".io/Lecture_Notes/";
// let page_url = ip1.substring(ip1.indexOf('.io/Lecture_Notes/') + ipep.length); // Extract path after domain
let ipep = ".netlify.app/";
let page_url = ip1.substring(ip1.indexOf('.netlify.app/') + ipep.length);

if (ip1.startsWith("https://lecturenotes.netlify.app")) {
  location.href = "https://osalotioman.github.io/Lecture_Notes/" + page_url;
}

// analytics.js  

(function() {
  // Create a script element for the Google Analytics script
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MV8S24ZR7R';
  document.head.appendChild(script);

  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  
  // Start tracking with the provided Measurement ID
  gtag('js', new Date());
  gtag('config', 'G-MV8S24ZR7R');
})();

function formerloadAdSense() {
    // Load AdSense script dynamically
    var adsScript = document.createElement('script');
    adsScript.async = true;
    adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2762018388982912";
    adsScript.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(adsScript);

    /*Create ad container dynamically
    var adContainer = document.createElement('ins');
    adContainer.className = 'adsbygoogle';
    adContainer.style.display = 'block';
    adContainer.setAttribute('data-ad-client', 'ca-pub-2762018388982912');
    adContainer.setAttribute('data-ad-slot', 'your-ad-slot-id');  // Add your actual ad slot here
    adContainer.setAttribute('data-ad-format', 'auto');
    document.body.appendChild(adContainer);

    // Push ad to be rendered
    (adsbygoogle = window.adsbygoogle || []).push({});*/
}
function rloadAdSense() {
    var adsScript = document.createElement('script');
    adsScript.async = true;
    adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2762018388982912";
    adsScript.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(adsScript);
}

// Call this function when you want to load and display the ad
//loadAdSense();

function startDownload(fileUrl) {
  alert("You need to watch an ad to download the file.");

  // Simulate ad watching with a timeout
  setTimeout(function() {
    window.location.href = fileUrl;
  }, 3000);  // Adjust based on the ad length
}
