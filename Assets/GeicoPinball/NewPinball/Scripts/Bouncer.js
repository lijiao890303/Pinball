//script used in the games bouncers to increase the score when they are touched by the ball

//variable to hold how much points to give when the ball touches them
public var pointsToGive :float = 100;
//variable to hold the collider which is colliding with the bouncers 
private var colliding :Collider;
var flipperKicks :AudioClip;
function OnCollisionEnter (collisionInfo : Collision) 
{
	//get the collider which is colliding with the bouncers 
	colliding = collisionInfo.collider;
	//if the colliding object is the ball , add some points to the score
	if(colliding .gameObject.name == "Ball")
	{
		
			if(flipperKicks.isReadyToPlay) {
				AudioSource.PlayClipAtPoint(flipperKicks,transform.position );
				
		}
		
		GameObject.Find("MainCamera").GetComponent(Score).scorePoints += pointsToGive;
		
		
	}
}