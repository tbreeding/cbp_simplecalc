const equalBtn = document.getElementById("equals");
const operBtns = document.querySelectorAll(".operator");
const numBtns = document.querySelectorAll(".numBtn");
const clearBtn = document.getElementById("clearBtn");

let nums = [];

const operatorClick = (num, oper) => {
    if(numInput.value) {
        nums.push(numInput.value, oper);
        numInput.value = null;
        numInput.focus();
    }
    return;
}

const equalClick = () => {
    if (numInput.value) nums.push(numInput.value);

    if(typeof(nums[nums.length - 1]) == "number") {
        numInput.value = eval(nums.join(""));
    } else {
        nums.pop();
        numInput.value = eval(nums.join(""));
    }
    nums = [];
    numInput.focus();
    return;
}

const clearClick = () => {
    if(numInput.value) {
        numInput.value = null;
    } else {
        nums = [];
    }
    numInput.focus();
}

//Event Listeners

numBtns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        numInput.value += e.target.innerText;
    })
})
operBtns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        if(numInput.value) {
            operatorClick(numInput.value, e.target.dataset.oper);
        }
    })
})

equalBtn.addEventListener("click", equalClick, false);
clearBtn.addEventListener("click", clearClick, false);

