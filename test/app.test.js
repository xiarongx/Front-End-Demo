describe('myAdd function should add up two numbers', function () {
    it('Unit test on JS function logic', function () {
        var a = 1;
        var b = 2;
        var actual = myAdd(a, b);
        expect(actual).to.equal(3);
    });

    it('Unit test on dynamic HTML: should display the sum of two numbers entered', function () {
        var a = document.getElementById('input-a');
        a.value = 1;
        var b = document.getElementById('input-b');
        b.value = 2;
    
        //call function in app.js
        myLogicFunction();
    
        //simulate click and observe dynamic html repsonse
        document.getElementById('button-add').click();
        var display = document.getElementById('result');
        var text = display.textContent;
        expect(text).to.equal('3');
    });
});

