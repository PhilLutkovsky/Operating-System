function App(n,m,s){

    //Declare your instance variables here.
    this.nombre = n;
    this.memory = m;
    this.state = s;

    //Declare the instance function open here.
    this.open = function(){
      this.state = "active";

    };
    //Declare the instance function sleep here.
    this.sleep = function(){
     if(this.state == "active"){
       this.state = "sleep";
       this.memory = this.memory/2;
     }
    };
    //Declare the instance function active here.
    this.active = function(){
      if(this.state == "sleep"){
        this.state = "active";
        this.memory = this.memory*2;
      }
    };


    //Declare the instance function close here.
    this.close = function(){
      if(this.state != null){
        this.state = null;
        this.memory = 0;
      }
    };
}

//Use the constructor to create 4 App objects below.

var internet = new App("chrome",200,null);
var music = new App("iTunes",100,null);
var facebook = new App("social",50,null);
var calcultor = new App("program",25,null);


//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.

var appList = [internet,music,facebook,calcultor];
console.log(appList)
