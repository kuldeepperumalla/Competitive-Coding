function slowFun(n){
    var [x,y,z] = [2,3,0];
for(i=0; i<n; i++){
    for(j=0; j<n; j++){
        z = x*y;
    }
}
return z + n
}

// console.log(slowFun(100000));

class SlowFun{
constructor(e){
    this.name = e;
    console.log("hello", this.name)
}


}

let userName = new SlowFun("shit");
userName;