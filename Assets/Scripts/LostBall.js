//this script is used to represent the hole where the ball goes when you loose a ball, it resets the ball position and substracts 1 life from your score

//variable to hold the balls reset position
 var ballStartPos :Vector3;
 var  pos :GameObject;
var flipperKicks :AudioClip;
function OnTriggerEnter (other : Collider) 
{
	//check if the object touching the trigger is the ball, otherwise anyother object
	//touching the trigger will make you loose the game
	ballStartPos =  pos.transform.position;
	if(other.gameObject.name == "Ball")
	{
		//reset the ball to the previously specified location
		other.transform.position = ballStartPos;
		//check if the ball actually has a rigidbody
		if(other.rigidbody)
		{
			//resets balls velocities to 0 to make it sit still
			other.rigidbody.velocity = Vector3.zero;
			other.rigidbody.angularVelocity = Vector3.zero;
		}
		//substract 1 life from your score
		
			if(flipperKicks.isReadyToPlay) {
				AudioSource.PlayClipAtPoint(flipperKicks,transform.position );
				
		}
		
		GameObject.Find("MainCamera").GetComponent(Score).lives -= 1;		
	}
}