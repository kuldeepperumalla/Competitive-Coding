function loader(src, callback){
   
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => callback(script);
        // script.onerror = () => reject(new Error('this script link is not owrking yo'));
        document.head.append(script)
}

loader("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js",ev=> {
  loader(
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js",
    (ev) => {
      loader(
        "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js",
        (ev) => {
          document.write(ev.src)
        }
      );
    });
});
