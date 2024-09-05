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