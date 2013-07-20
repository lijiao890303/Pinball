private var  button :boolean = false;
var poz :Vector3 = Vector3(44.56,40.0714,-33.45657);
var stol :GameObject ;
var flipperKick :AudioClip;

function Update()
{
		if (Input.GetButton("Tilt"))
	{
		button = true;
	}
	else
	{
		button = false;
	}

	
}
function FixedUpdate ()
{
	//if the RightFLipper command button is pressed
	

		

	if (button) 
	{
		//reset the velocities on the unused axes to zero, to avoid any strange behaviour
		stol.transform.position.x  = poz.x + 0.2;
		//rigidbody.AddRelativeTorque(Vector3(0,7500 ,0),ForceMode.VelocityChange);
		if(flipperKick) {
			
			if(flipperKick.isReadyToPlay) {
				AudioSource.PlayClipAtPoint(flipperKick,transform.position,0.2 );
				
			}
			
		}
		
	}
			
	//if the RightFLipper command button isnt pressed
	else
	{
		//reset the velocities on the unused axes to zero, to avoid any strange behaviour
		stol.transform.position.x  = poz.x;
	}	
	
	
	
}		