using UnityEngine;
using System.Collections;

public class SetScreenResolution : MonoBehaviour {

	// Use this for initialization
	void Start () {
  
		Screen.SetResolution(728, 1024, false);
	}
}
