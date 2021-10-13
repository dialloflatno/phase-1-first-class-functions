function receivesAFunction(param){
    return param();
}

function returnsANamedFunction(){
    function test(){};
    return test;
   
}
function returnsAnAnonymousFunction(){
    return function (){};

}