window.onload = function() {

    const btn = document.querySelector("#send");

    btn.addEventListener("click", function(e) {

        e.preventDefault();

        const in1 = document.querySelector("#num1");
        const in2 = document.querySelector("#num2");
        const in3 = document.querySelector("#num3");

        console.log()

        let numbers = [Number(in1.value), Number(in2.value), Number(in3.value)];

        let maxN = max3(numbers);
        console.log("max3 = " + maxN);
        document.getElementById("ans").innerHTML = maxN;

    });

    function max3 (numbers) {

        var num1 = numbers[0];
        var num2 = numbers[1];
        var num3 = numbers[2];
        var max = 0;

        if (num1 > num3 && num1 > num2) {
            max = num1;
        }
        if (num2 > num3 && num2 > num1) {
            max = num2;
        }
        if (num3 > num2 && num3 > num1) {
            max = num3;
        }

        return max;
    }
}
