var blink = document.getElementById('blink');
var me=["Web Developer.","Chess Player.","Bibliophile.","Coder.","Aspiring Professor.","Intending Mathematician.","Leader.","Student."];
setInterval(function() {blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);}, 530)
async function typeSentence(sentence, delay = 80) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    document.getElementById("iamvansh").innerHTML+=letters[i]
    i++}
  return;}
function waitForMs(ms) {return new Promise(resolve => setTimeout(resolve, ms))}
async function d(sentence, delay = 40) {
  const letters = sentence.split("");
  let i = letters.length-1;
  while(i >-1) {
    await waitForMs(delay);
    document.getElementById("iamvansh").textContent=sentence.slice(0,i)
    i=i-1}
  return;}
async function who(me){
var arrayLength = me.length;
while (true){
for (var i = 0; i < arrayLength; i++) {
  var temp=me[i];
  typeSentence(temp);
    await  waitForMs(2400);
    d(temp);
    await  waitForMs(1200);
}}}
who(me);

