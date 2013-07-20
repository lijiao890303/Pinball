 var ballStartPos :Vector3;
 var  pos :GameObject;
 
 
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
			
	}
}