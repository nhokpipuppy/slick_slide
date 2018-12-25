var a=document.getElementsByClassName('one');
console.log(a.length);
var s=0;
var i;
var e=5;
for(i=0;i<a.length;i++){
    a[i].style.display="none";
    console.log(i);
}
for(i=s;i<e;i++){
    a[i].style.display="block";
};
console.log('e ='+e);
    console.log("i=" +i);
    console.log('s= '+s);
function next(){
    e=e+1; 
    s=e-5;
    i=e-6;
    // if(i==-1){
    //     i=11;
    // }
    for(z=0;z<a.length;z++){
            a[z].style.display="none";
            console.log(z);
        }
    // console.log('e ='+e);
    // console.log('s= '+s);
    // console.log("i=" +i);
    // a[i].style.display="none";
    
    for(j=s;j<e;j++){
            a[j].style.display="block";
        };
        if(e>11){
                e=4;
                s=-1;
               console.log('quá giá trị');
            }
}