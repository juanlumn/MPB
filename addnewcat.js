var win = Titanium.UI.currentWindow;

var inputname = Titanium.UI.createTextField({
  hintText:'Enter Category Name',
	top:200,
	left:20,
	width:200,
	height:40,
	editable: true
})

var button = Titanium.UI.createButton({
	title:'Save Category',
	top: 300,
	left:75,
	width:90,
	heigth:40	
})
//Stores the new category in categories table and the name&category in contacts table
button.addEventListener('click',function(){
	 var db = Titanium.Database.open('appDatabase');
	 db.execute ('INSERT INTO categories(name) VALUES (?)',inputname.value.toString());
	 db.execute ('INSERT INTO contacts(name,category) VALUES (?,?)',win.CName,inputname.value.toString());
	 alert('New Contact created');
	 db.close();
	 win.close();
})

win.add(inputname);
win.add(button);
