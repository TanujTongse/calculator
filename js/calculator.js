function rclr()
	{
		var t=document.getElementById('i1').value;
		t=t.substring(0,t.length-1);
		document.getElementById('i1').value=t;
	}
	function clen()
	{
		document.getElementById('i1').value=0;
	}
	function res()
	{
		var t=document.getElementById("i1").value;
		document.getElementById('i1').value=eval(t);
	}
	function val(n)
	{
		var t=document.getElementById('i1').value;
		document.getElementById('i1').value=t+n;
	}