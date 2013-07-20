//private variable to hold the value of the runtime platform check
private var isWebPlayer :boolean = false;


function Update()
{
	//check to know if the game is running on the browser in a webplayer and not as standalone application
	//it returns true if the game is running on the browser in either windows or mac osx , returns false if running as a standalone application
	isWebPlayer = (Application.platform == RuntimePlatform.OSXWebPlayer || Application.platform == RuntimePlatform.WindowsWebPlayer);

	//check if its not a webplayer, if its a webplayer dont do anything, if its a standalone application ,close when pressing scape key
	//we dont want to close the game when being played on a web browser that can be done just closing the browser window
	if(!isWebPlayer)
	{
		//check if the scape key is being pressed, difference between Input.GetKey and Input.GetKeyDown 
		//is that GetKeyDown only returns true once you press the button and release it and GetKey returns true as long as you are holding down a key
		if (Input.GetKeyDown (KeyCode.Escape)) 
		{
			//this commands closes the current game, use this only running as a standalone application
			Application.LoadLevel (0);
		}
		
	}
	
	if(isWebPlayer)
	{
		//check if the scape key is being pressed, difference between Input.GetKey and Input.GetKeyDown 
		//is that GetKeyDown only returns true once you press the button and release it and GetKey returns true as long as you are holding down a key
		if (Input.GetKeyDown (KeyCode.Escape)) 
		{
			//this commands closes the current game, use this only running as a standalone application
			Application.LoadLevel(Application.loadedLevel);
		}
		
	}
}