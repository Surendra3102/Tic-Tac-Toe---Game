let current_player='o';
let o=document.getElementById('output');
let game=true;
let draw=true;
function cl1(){
    let d=document.getElementById("cell1")
    if(game==true && d.innerHTML==''){
        if(current_player =='o'){
            d.innerHTML = 'o';
            checking_winner()
            current_player='x';
        }else{
            d.innerHTML = "x"
            checking_winner()
            current_player='o'
        }
    }
}

function cl2(){
    let d=document.getElementById('cell2')
    if(game==true && d.innerHTML==''){
        if(current_player =='o'){
            d.innerHTML = "o"
            checking_winner()
            current_player='x'
        }else{
            d.innerHTML = "x"
            checking_winner()
            current_player='o'
       }

    }
    
}

function cl3(){
    let d=document.getElementById('cell3')
    if(game==true && d.innerHTML==''){
        if(current_player =='o'){
            d.innerHTML = "o"
            checking_winner()
            current_player='x'
        }else{
            d.innerHTML = "x"
            checking_winner()
            current_player='o'
        }
    }  
}

function cl4(){
    let d=document.getElementById('cell4')
    if(game==true && d.innerHTML==''){
        if(current_player =='o'){
            d.innerHTML = "o"
            checking_winner()
            current_player='x'
        }else{
            d.innerHTML = "x"
            checking_winner()
            current_player='o'
        }
    }
}

function cl5(){
    let d=document.getElementById('cell5')
    if(game==true && d.innerHTML==''){
        if(current_player =='o'){
            d.innerHTML = "o"
            checking_winner()
            current_player='x'
        }else{
            d.innerHTML = "x"
            checking_winner()
            current_player='o'
        }
    }
   
}

function cl6(){
    let d=document.getElementById('cell6')
    if(game==true && d.innerHTML==''){
        if(current_player =='o'){
            d.innerHTML = "o"
            checking_winner()
            current_player='x'
        }else{
            d.innerHTML = "x"
            checking_winner()
            current_player='o'
        }
    }
    
}

function cl7(){
    let d=document.getElementById('cell7')
    if(game==true && d.innerHTML==''){
        if(current_player =='o'){
            d.innerHTML = "o"
            checking_winner()
            current_player='x'
        }else{
            d.innerHTML = "x"
            checking_winner()
            current_player='o'
        }
    }
}

function cl8(){
    let d=document.getElementById('cell8')
    if(game==true && d.innerHTML==''){
        if(current_player =='o'){
            d.innerHTML = "o"
            checking_winner()
            current_player='x'
        }else{
            d.innerHTML = "x"
            checking_winner()
            current_player='o'
        }
    } 
}

function cl9(){
    let d=document.getElementById('cell9')
    if(game==true && d.innerHTML==''){
        if(current_player =='o'){
            d.innerHTML = "o"
            checking_winner()
            current_player='x'
        }else{
            d.innerHTML = "x"
            checking_winner()
            current_player='o'
        }
    }
}


function checking_winner(){
    let b1=document.getElementById('cell1').innerHTML;
    let b2=document.getElementById('cell2').innerHTML;
    let b3=document.getElementById('cell3').innerHTML;
    let b4=document.getElementById('cell4').innerHTML;
    let b5=document.getElementById('cell5').innerHTML;
    let b6=document.getElementById('cell6').innerHTML;
    let b7=document.getElementById('cell7').innerHTML;
    let b8=document.getElementById('cell8').innerHTML;
    let b9=document.getElementById('cell9').innerHTML;

    
    if((b1==current_player && b2== current_player && b3== current_player) || (b4==current_player && b5== current_player && b6== current_player)
        ||(b7==current_player && b8== current_player && b9== current_player)|| (b1==current_player && b4== current_player && b7== current_player) 
        ||(b2==current_player && b5== current_player && b8== current_player) || (b3==current_player && b6== current_player && b9== current_player) 
        ||(b1==current_player && b5== current_player && b9== current_player) || (b3==current_player && b5== current_player && b7== current_player)  ){
        o.innerHTML=current_player +' is the winner'
        game=false;

    }

    if (b1 != '' && b2 != '' && b3 != '' && 
        b4 != '' && b5 != '' && b6 != '' && 
        b7 != '' && b8 != '' && b9 != '') {
        o.innerHTML = 'Draw Match';
        game=false;
    
}
}



function reset(){
    window.location='index.html'

}


