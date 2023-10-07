// togloom duussan esehiig hadgalah tolowiin huwisagch
var isNewGame;
// togloom eeljiig hadgalah huwisagch, 1dvgeer toglogchiig 0, 2iig ni 1 gek temdeglene
var activePlayer;
// toglogchdiin tsugluulsan onoog hadgalah huwisagch
var scores;
//toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
var roundScore;
var diceDom = document.querySelector(".dice");
initGame();
function initGame(){
    //togloom ehelle gedeg tolowt oruulna
    isNewGame = true;
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0; 
   //Shoonii ali talaaraa buusniig hadgalah huwisagch, 1-6 gesen utgiig ene huwisagchid sanamsargvi vvsgej ogno
   document.getElementById('score-1').textContent =0;
   document.getElementById("score-0").textContent = 0;
   document.getElementById("current-0").textContent=0;
   document.getElementById("current-1").textContent=0;
   document.getElementById('name-0').textContent='Player 1';
   document.getElementById('name-1').textContent='Player 2';
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');

   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-0-panel').classList.add('active');
   diceDom.style.display = 'none';
   }
 //shoog shideh event linstener
document.querySelector(".btn-roll").addEventListener("click", function (){
    if(isNewGame !== false){
        // 1-6 hvrtelh sanamsargvi utga gargana
    var diceNumber = Math.floor(Math.random()*6)+1;
    // shoonii zurgiig web deer gargaj irne
    diceDom.style.display = 'block';
    // toond taarsan zurgiig gargaj irne
    diceDom.src='dice-'+diceNumber+'.png';
    //buusan too 1ees ylgaatai bol idewhtei toglogchiin eeljiin onoog nemegdvvlne
if(diceNumber !== 1){
    // 1-ees ylgaatai bol buusan toog toglogchid nemj ogno.
    roundScore = roundScore + diceNumber;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
} else{
    //1 buusan bol toglogchiin eeljiig ene hesegt solij ogno
    Daraagiintoglogchruushilj();
}}
});
// hold towchnii event list hiih
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(isNewGame !== false){
    // ug toglogch ni tsugluulsan eeljnii onoog globali onoon deer ni nemj ogno
    scores[activePlayer]= scores[activePlayer] + roundScore;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
     // ug toglogch hojson esehiig shalgah 
    if(scores[activePlayer] >= 100){
        //togloomiig duussan tolowt oruulah 
        isNewGame = false;
        document.getElementById('name-'+activePlayer).textContent='You winner !!!';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        diceDom.style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        }else {
    // toglogchiin eeljiig solih
    Daraagiintoglogchruushilj();
 };
}else{
    alert('Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү');
}
});
function Daraagiintoglogchruushilj(){
    //ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    // toglogchiin eeljiig solih
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // deerh ni eniig ilvv hylbarshuulj bna. if(activePlayer === 0){
    //     activePlayer = 1;
    // } else {
    //     activePlayer = 0;
    // }
    //ulaan tsegiig solih 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //shoog tvr alga bolgono
    diceDom.style.display = 'none';
}
// shineer ehlvvleh towchnii event lis
document.querySelector('.btn-new').addEventListener('click', initGame);
