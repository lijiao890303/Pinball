//this script is used by the right flipper

//variable to hold if the RightFLipper command button is pressed
private var  button :boolean = false;

function Start ()
{
}

function Update()
{
	//if the RightFLipper command button is pressed,set the variable acordingly
	
	
		if (Input.GetButton("RightFlipper"))
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
		rigidbody.angularVelocity.x = 0;
		rigidbody.angularVelocity.z = 0;
		//add the required torque to move the flipper down, until the limits of the hinge joint
		rigidbody.AddRelativeTorque(Vector3(0,7500 * Time.deltaTime,0),ForceMode.VelocityChange);
		
	
		//rigidbody.AddRelativeTorque(Vector3(0,7500 ,0),ForceMode.VelocityChange);
	}
			
	//if the RightFLipper command button isnt pressed
	else
	{
		//reset the velocities on the unused axes to zero, to avoid any strange behaviour
		rigidbody.angularVelocity.x = 0;
		rigidbody.angularVelocity.z = 0;
		//add the required torque to move the flipper down, until the limits of the hinge joint
		rigidbody.AddRelativeTorque(Vector3(0,-7500 * Time.deltaTime,0),ForceMode.VelocityChange);
		//rigidbody.AddRelativeTorque(Vector3(0,-7500 ,0),ForceMode.VelocityChange);
	}	
	
	
	
}			

