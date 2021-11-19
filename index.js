const msg = document.querySelector('.msg');
    const guess = document.querySelector('input');
    const btn = document.querySelector('.btn');
    let play = false;
    let newWords = "";
    let randWords = "";
    let swords = ['python','javaScript','C++','php','java','c#','html','css','reactjs','angular','swift','android','sql','nodejs',
                'mongodb','Expressjs','django','springboot','bootstrap','materialUI']

    const createNewWords = () => {
        let ranNum = Math.floor(Math.random()*swords.length);
        let newTempSword = swords[ranNum];
        // console.log(newTempSword.split(""));
        return newTempSword; 

    }

    const scrambleWords = (arr) => {
        for (let i =arr.length-1;i>0; i--){
        let temp = arr[i];
        // console.log(temp); 
        let j = Math.floor(Math.random()*(i+1));
        // console.log(i);
        // console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;
        }
        return arr;
    }

    btn.addEventListener('click',function(){
        if(!play){
            play = true;
            btn.innerHTML = "Guess";
            guess.classList.toggle('hidden');
            newWords=createNewWords();
            randWords=scrambleWords(newWords.split("")).join("");
            // console.log(randWords.join(""));
            msg.innerHTML = `Guess The Words => ${randWords}`;
        }else{
            let temwords = guess.value;
            let score = 0;
            if (newWords == temwords){
                
                // console.log("correct");
                play = false;
                msg.innerHTML = `Awesome It's Correct. it is ${newWords}`;
                add1();
                
                btn.innerHTML = "Start Again";
                
                guess.classList.toggle('hidden');
                guess.value = "";
            }else{
                // console.log("Incorrect");
                msg.innerHTML = `Sorry Boss. It's not correct. Please try Again ${randWords} `;
                guess.value = "";
            }
        }
    })