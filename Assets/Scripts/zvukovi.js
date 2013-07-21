private var  button :boolean = false;
private var ZvukoviTF :boolean = true;

var flipperKicks :AudioClip;


function Start ()
{
}

function Update()
{
		if (Input.GetButtonUp("LeftFlipper") || Input.GetButtonUp("RightFlipper"))
		{
		
		 
			if(flipperKicks.isReadyToPlay) {
				AudioSource.PlayClipAtPoint(flipperKicks,transform.position );
				
		}
		
		
		
	}
	

	
}