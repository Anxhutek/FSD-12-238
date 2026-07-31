const f1=()=> {
  console.log("Hello from f1");
};

const f2=()=> {
  console.log("Hello from f2");
};

const f3=()=> {
  console.log("Hello from f3");
};

function main() {
    console.log("Hello from main");
    setTimeout(f1, 1000);
  
    setImmediate(f2);
    f3();
    console.log("Hello from main end");
};

main();
