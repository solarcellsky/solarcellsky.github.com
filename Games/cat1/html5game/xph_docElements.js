var timeToPressMg = 0;
var timeToPressLogo = 0;

function js_initElements()
{

link.addEventListener('onclick', function () {
    // Do not scroll when keyboard is visible 
    link.style.pointerEvents = "none";

}, true);

logo.addEventListener('onclick', function () {
    // Do not scroll when keyboard is visible 
    logo.style.pointerEvents = "none";

}, true);

link.addEventListener('ontouchend', function () {
    // Do not scroll when keyboard is visible 
    link.style.pointerEvents = "none";

}, true);

logo.addEventListener('ontouchend', function () {
    // Do not scroll when keyboard is visible 
    logo.style.pointerEvents = "none";

}, true);

}

function js_showElementAt( _id, _x, _y, _width, _height )
{
  if (timeToPressMg > 0) timeToPressMg--;
  if (timeToPressLogo > 0) timeToPressLogo--;

  var elem = document.getElementById(_id);
  if (elem)
  {
    elem.style.display="block";
    elem.style.visibility="visible";
	
if (_id == "img.spilgames-branding-image" && timeToPressLogo == 0)
    elem.style.pointerEvents = "auto"; else
    elem.style.pointerEvents = "none";

if (_id == "spilgames-more-games-btn" && timeToPressMg == 0)
    elem.style.pointerEvents = "auto"; else
    elem.style.pointerEvents = "none";

	elem.style.pointerEvents = "auto";

    elem.style.position='fixed';
    elem.style.left = _x - _width * 0.5 + "px";
    elem.style.top = _y - _height * 0.5 + "px";
    elem.style.width = _width + "px";
    elem.style.height = _height + "px";

  }
}

function js_hideElement( _id )
{
  var elem = document.getElementById(_id);
  if (elem)
  {
    elem.style.display="none";
    elem.style.visibility="hidden";
    elem.style.pointerEvents = 'none';
  }
}

function js_showElement( _id )
{
  var elem = document.getElementById(_id);
  if (elem)
  {
    elem.style.display="block";
    elem.style.visibility="visible";
    elem.style.pointerEvents = "auto";
  }
}

var gamePaused = false;

function pauseGame() {
    gamePaused = true;
    // Insert here the logic to pause your game
    console.log('The advertisement is about to show, you should pause your game');
}

function resumeGame() {
    gamePaused = false;
    // Insert here the logic to resume your game
    console.log('The advertisment is shown and your game can now be resumed');
}

function js_showAd( )
{
    // GameAPI.GameBreak.request(pauseGame, resumeGame);
}

function js_submitAward( awName )
{
    // this is the award object that will be submitted to Spil Games
    // it should contain an award string value with the same value
    // as the one set on Spil Games' backend. For setting up the award
    // for you game contact the game producer handling your integration.
    var award = {award:awName};
    
    //submit the player's score
    // GameAPI.Award.submit(award);
}

function js_isGamePaused( )
{
  return gamePaused;
}