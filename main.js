let result = document.getElementById("result");

//数字が押されたとき
function clickNumber(number){
        if(result.value == 0){              //0始まり表示の回避
            if(number == '00'){             //00表示の回避
                result.value = 0;
            }else{
            result.value = number;
            }
        }else{
            result.value += number;
        }
    }

//演算子、小数点が押されたとき
function clickSign(sign){
    let before = result.value.slice(-1);
    if(before == '+'){                                      //演算子の二重表示回避
        result.value = result.value.replace(before, sign);
    }else if(before == '-'){
        result.value = result.value.replace(before, sign);;
    }else if(before == '*'){
        result.value = result.value.replace(before, sign);
    }else if(before == '/'){
        result.value = result.value.replace(before, sign);
    }else if(before == '.'){
        return;
    }else{
        result.value += sign;
    }
}

//=が押されたとき
function calculate(){
    result.value = eval(result.value);
}

//ACが押されたとき
function reset(){
    result.value = 0;
}