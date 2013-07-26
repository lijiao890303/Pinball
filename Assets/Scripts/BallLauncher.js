//this script is used for the ball launcher

//variable to hold if the LaunchBall command button has been pressed
private var launchButtonPressed :boolean = false;
//variable to hold if the ball is touching the ball launcher
private var isTouchingLauncher :boolean = false;
var flipperKick :AudioClip;
function Update ()
{
	//check if the LaunchBall command button is pressed and set the variable acordingly
	if (Input.GetButton("LaunchBall")) 
	{
		launchButtonPressed = true;
	}
	else
	{
		launchButtonPressed = false;
	}
	 
}


function FixedUpdate ()
{
	//check if the LaunchBall command button is pressed and if the ball is touching the ball launcher, launch the ball!
	if(launchButtonPressed)
	{
		if(isTouchingLauncher)
		{
			if(GameObject.Find("Ball").rigidbody)
			{
				GameObject.Find("Ball").rigidbody.velocity = Vector3(0,0,35);
			}
		}	
	}	
}

function OnTriggerEnter (other : Collider) 
{
	//set the variable to true when the ball starts touching the ball launcher
	if(other.gameObject.name == "Ball")
	{
		isTouchingLauncher = true;	
			if(flipperKick.isReadyToPlay) {
				AudioSource.PlayClipAtPoint(flipperKick,transform.position );
				
		}
	}
}

function OnTriggerExit (other : Collider) 
{
	//set the variable to false when the ball is not touching the launcher anymore
	if(other.gameObject.name == "Ball")
	{
		isTouchingLauncher = false;	
	}
}