var win = Titanium.UI.currentWindow;

var inputname = Titanium.UI.createTextField({
  hintText:'Enter Name',
	top:200,
	left:20,
	width:200,
	height:40,
	editable: true
})

var button = Titanium.UI.createButton({
	title:'Save Contact',
	top: 300,
	left:80,
	width:85,
	heigth:40	
})
//Add new contact
button.addEventListener('click',function(){
	var win2 = Titanium.UI.createWindow({
		backgroundColor:'#fff',
		title:'5.6',
		url:'list.js',
		CName:inputname.value.toString(),//Stores the name in CName
	});
	win2.open();
	win.close();
})

win.add(inputname);
win.add(button);
