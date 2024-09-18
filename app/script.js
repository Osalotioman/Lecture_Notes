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

function loadAdSense() {
    var adsScript = document.createElement('script');
    adsScript.async = true;
    adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2762018388982912";
    adsScript.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(adsScript);
}

// Call this function where needed
loadAdSense();

function startDownload(fileUrl) {
  alert("You need to watch an ad to download the file.");

  // Simulate ad watching with a timeout
  setTimeout(function() {
    window.location.href = fileUrl;
  }, 3000);  // Adjust based on the ad length
}
