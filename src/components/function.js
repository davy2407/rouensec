

function calculMouseDown(Test){
    var start;
    var end;
    var delta;
    var test = document.getElementById(Test);

    test.AddEventListener("mousedown", function(){
        start = new Date();
    });

    test.AddEventListener("mouseup", function(){
        end = new Date();
        delta = (end - start ) /1000.0;
        alert(delta);
    })
}