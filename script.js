let countA = 0;
let countB = 0;

const valueA = document.querySelector("#valueC");
const valueB = document.querySelector("#valueT");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("removeC")){
            countA--;
        }
        else if (styles.contains("addC")){
            countA++;
        }
        else if(styles.contains("resetC")){
            countA = 0;
        }

        else if(styles.contains("addT")){
            countB++;
        }

        else if(styles.contains("removeT")){
            countB--;
        }

        else {
            countB = 0
        }

        valueC.textContent = countA;

        valueT.textContent = countB;

    });
});