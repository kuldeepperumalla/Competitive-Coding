function onLoad(src){
    return new Promise((resolve, reject) => {
        script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('this script link is not owrking yo'));
        document.head.append(script)
    })
}

let promise = onLoad(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise.then(script => console.log(script.src), err => console.log(err));
promise.then(res => console.log('another handler', res))