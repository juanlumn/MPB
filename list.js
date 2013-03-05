var win = Titanium.UI.currentWindow;

var db = Titanium.Database.open('appDatabase');

var rows = db.execute('SELECT * FROM categories');

var data=[];

var Table =  Titanium.UI.createTableView();

while (rows.isValidRow()) {
  
	var TableRow = Titanium.UI.createTableViewRow({
		text:rows.fieldByName('name'),
		width:'auto',
		height:'auto',
		textAlign:'left',
		left:40
	});
	
	data.push(TableRow),
	rows.next()
}
Table.setData(data);

//If customer choose a category
Table.addEventListener('click',function(e){
	var db = Titanium.Database.open('appDatabase');
	db.execute ('INSERT INTO contacts(name,category) VALUES (?,?)',win.CName,e.rowData.text);
	alert('New Contact Created');
	db.close();
	win.close();
})

var button = Titanium.UI.createButton({
    title: 'Add Category',
    top:300,
	left:80,
	width:'auto',
	heigth:'auto'
});
//If customer wants to create a new category
button.addEventListener('click',function(){
	var win2 = Titanium.UI.createWindow({
		backgroundColor:'#fff',		    
		title:'5.8',
		url:'addnewcat.js',
		CName:win.CName
	});
	win2.open();
	win.close();
})
win.add(Table);
win.add(button);
