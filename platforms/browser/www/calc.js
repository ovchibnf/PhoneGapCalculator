	function getOrientation(){
	alert('Orientation is ' + screen.orientation.type);
	}
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function insert(num){
		document.form.textview.value = document.form.textview.value+num;
	}
	function insert1(num){
		
		if (document.form.textview1.value.indexOf('=') != '-1') 
		{
			document.form.textview.value = "";
			document.form.textview.value = document.form.textview1.value.replace('=',' ') + num;
		}
		else
		{
			document.form.textview.value = document.form.textview.value+num;
		}
		//document.form.textview.value = document.form.textview.value+num;
	}
	function insert3(){
		
		if (document.form.textview1.value.indexOf('=') != '-1')
		{
			document.form.textview.value = "";
			document.form.textview.value = document.form.textview1.value.replace('=',' ');
			if (document.form.textview.value.substring(1, 1) == '-' )
			{
				document.form.textview.value = "-" + document.form.textview.value;
			}
			else if (document.form.textview.value.substring(1, 1) != '-')
			{
				document.form.textview.value = document.form.textview.value.replaceAt(0, " ");
			}
		}
		else if (document.form.textview.value.substring(0, 1) != '-' )
			{
				alert('ffff');
				document.form.textview.value = "-" + document.form.textview.value;
			}
			else if (document.form.textview.value.substring(0, 1) != '-')
			{
				
				document.form.textview.value = document.form.textview.value.replaceAt(0, " ");
			}
	    }
	function equal(){
		if (document.form.textview.value.indexOf('^(1/2)') != '-1') {
			document.form.textview1.value = Math.sqrt(document.form.textview.value.replace('^(1/2)',''));
		}
		else{document.form.textview1.value = "=" + eval(document.form.textview.value);}	
		
	}
	function clean(){
	document.form.textview.value = "";
	document.form.textview1.value = "";
	}
	function back(){
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0,exp.length-1);	
	}
	String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
	
	