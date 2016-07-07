// JavaScript Document

var ideSelected = false;
var konceptSelected = false;
var udviklingSelected = false;
var testSelected = false;
var driftSelected = false;

$(".accordion").accordion({collapsible:true,
							active:false,
							heightStyle:"content",
							event:"click",
							icons:{"header":"ui-icon-plus", "activeHeader":"ui-icon-minus"}
							});

<!-- Sørger for at alle accordions er skjult fra start af -->
document.getElementById("ide").style.visibility = "hidden";
document.getElementById("koncept").style.visibility = "hidden";
document.getElementById("udvikling").style.visibility = "hidden";
document.getElementById("test").style.visibility = "hidden";
document.getElementById("drift").style.visibility = "hidden";


<!-- Funktioner for Idé -->
function ide_select()
{
	if(ideSelected==false)
	{
		document.getElementById("loopIde").src="Images/Loop.png";
		ideSelected = true;
		document.getElementById("ide").style.visibility = "visible";
	}
	else if(ideSelected==true)
	{
		document.getElementById("loopIde").src="Images/LoopSelected.png";
		ideSelected = false;
		document.getElementById("ide").style.visibility = "hidden";
	}
}

function ide_over()
{
	if(ideSelected==false)
	{
		document.getElementById("loopIde").src="Images/Loop.png";
		
	}
}

function ide_out()
{
	if(ideSelected==false)
	{
		document.getElementById("loopIde").src="Images/LoopSelected.png";
	}
}


<!-- Funktioner for Koncept -->
function koncept_select()
{
	if(konceptSelected===false)
	{
		document.getElementById("loopKoncept").src="Images/Loop.png";
		konceptSelected = true;
		document.getElementById("koncept").style.visibility = "visible";
	}
	else if(konceptSelected===true)
	{
		document.getElementById("loopKoncept").src="Images/LoopSelected.png";
		konceptSelected = false;
		document.getElementById("koncept").style.visibility = "hidden";
	}
}

function koncept_over()
{
	if(konceptSelected===false)
	{
		document.getElementById("loopKoncept").src="Images/Loop.png";
	}
}

function koncept_out()
{
	if(konceptSelected===false)
	{
		document.getElementById("loopKoncept").src="Images/LoopSelected.png";
	}
}


<!-- Funktioner for Udvikling -->
function udvikling_select()
{
	if(udviklingSelected===false)
	{
		document.getElementById("loopUdvikling").src="Images/Loop.png";
		udviklingSelected = true;
		document.getElementById("udvikling").style.visibility = "visible";
	}
	else if(udviklingSelected===true)
	{
		document.getElementById("loopUdvikling").src="Images/LoopSelected.png";
		udviklingSelected = false;
		document.getElementById("udvikling").style.visibility = "hidden";
	}
}

function udvikling_over()
{
	if(udviklingSelected===false)
	{
		document.getElementById("loopUdvikling").src="Images/Loop.png";
	}
}

function udvikling_out()
{
	if(udviklingSelected===false)
	{
		document.getElementById("loopUdvikling").src="Images/LoopSelected.png";
	}
}


<!-- Funktioner for Test -->

function test_select()
{
	if(testSelected===false)
	{
		document.getElementById("loopTest").src="Images/Loop.png";
		testSelected = true;
		document.getElementById("test").style.visibility = "visible";
	}
	else if(testSelected===true)
	{
		document.getElementById("loopTest").src="Images/LoopSelected.png";
		testSelected = false;
		document.getElementById("test").style.visibility = "hidden";
	}
}

function test_over()
{
	if(testSelected===false)
	{
		document.getElementById("loopTest").src="Images/Loop.png";
	}
}

function test_out()
{
	if(testSelected===false)
	{
		document.getElementById("loopTest").src="Images/LoopSelected.png";
	}
}


<!-- Funktioner for Drift -->
function drift_select()
{
	if(driftSelected===false)
	{
		document.getElementById("loopDrift").src="Images/Loop.png";
		driftSelected = true;
		document.getElementById("drift").style.visibility = "visible";
	}
	else if(driftSelected===true)
	{
		document.getElementById("loopDrift").src="Images/LoopSelected.png";
		driftSelected = false;
		document.getElementById("drift").style.visibility = "hidden";
	}
}

function drift_over()
{
	if(driftSelected===false)
	{
		document.getElementById("loopDrift").src="Images/Loop.png";
	}
}

function drift_out()
{
	if(driftSelected===false)
	{
		document.getElementById("loopDrift").src="Images/LoopSelected.png";
	}
}

document.get

/* Nyt vindue funktion */						
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function usability1()
{
	document.getElementById("imageBig").src="Images/Usability1.jpg";
	
}

function usability2()
{
	document.getElementById("imageBig").src="Images/Usability2.png";
}

function usability3()
{
	document.getElementById("imageBig").src="Images/Usability3.png";
}
