//--------------------------------------------
//            NGUI: HUD Text
// Copyright � 2012 Tasharen Entertainment
//--------------------------------------------

using UnityEngine;

/// <summary>
/// Example script that displays text above the collider when the collider is hovered over or clicked.
/// </summary>

[AddComponentMenu("NGUI/Examples/Collider - Display Text")]
public class ColliderDisplayText : MonoBehaviour
{
	// The UI prefab that is going to be instantiated above the player
	public GameObject prefab;
	public Transform target;

	HUDText mText = null;
	bool mHover = false;

	// Use this for initialization
	void Start ()
	{
		// We need the HUD object to know where in the hierarchy to put the element
		if (HUDRoot.go == null)
		{
			GameObject.Destroy(this);
			return;
		}

		GameObject child = NGUITools.AddChild(HUDRoot.go, prefab);
		mText = child.GetComponentInChildren<HUDText>();
	}

 void OnCollisionEnter(Collision collision) 
    {
    
        mText.Add("Object Collided " + collision.rigidbody.gameObject.name, Color.cyan, 0f);
    }
}
