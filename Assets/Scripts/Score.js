//this script is used to keep track of the score of the game and the remaining lives

//varible to hold how many points do we have
public var scorePoints :float = 0;
//variable to hold how many lives do we have
public var lives :float = 3;
//variable to hold if its game over
private var showGameOver :boolean = false;

function Update()
{
	//if lives equal 0 , then game over
	if(lives == 0)
	{
		showGameOver = true;
		ReloadLevel();
	}
}

function OnGUI ()
{	
	//draw the controls instruction window
	GUILayout.BeginArea(Rect(10,10,150,120),"Controls",GUI.skin.window);
		GUILayout.Label("Move the Flippers with the Arrows");
		GUILayout.Label("Launch the Ball with Space Bar");
		GUILayout.Label("Press A key for tilt");
		GUILayout.Label("Press Esc To Exit or Restart");
	GUILayout.EndArea();
	//draw the score window
	GUILayout.BeginArea(Rect(Screen.width  - 230 ,10,220,80),"Score",GUI.skin.window);
		GUILayout.Label("Points : " + scorePoints.ToString());
		GUILayout.Label("Balls  : " + lives.ToString());
	GUILayout.EndArea();
	
	//if its gameover show the game over window
	if(showGameOver)
	{
		GUILayout.BeginArea(Rect((Screen.width / 2) - 50,(Screen.height / 2) - 30,100,60),GUI.skin.box);
		GUILayout.Label("    GAME OVER");
		GUILayout.Label("Your Score is : " + scorePoints.ToString());
		GUILayout.EndArea();
	}
}

function ReloadLevel()
{
	//if its game over, wait 5 seconds and then reload the level
	if(showGameOver)
	{
		yield new WaitForSeconds (5);
		Application.LoadLevel(Application.loadedLevel);
	}
}
