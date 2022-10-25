console.log('start') 

const hist=[]
const tmax = 1000 // 1sec 
//const tmax = 10*60*1000  // 10 min
const nmax = 5

function ratelimit() {
  if (hist.length < nmax) return false
  const t1 = hist[hist.length - nmax]
  if ((new Date() - t1) > tmax)
  return false; else return true
}


  
function action() {
  if (ratelimit()) {
    console.log("limite atteinte... dont do")
  } else {
  console.log("do action")
  hist.push(new Date())
  }
}

action();
action();
action();
action();
action();
action();
action();
pausecomp(1000)
action();
action();
action();
action();
action();
action();


function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}