var win = Titanium.UI.currentWindow;

var db = Titanium.Database.open('appDatabase');
var rows = db.execute('SELECT * FROM categories');
db.close();

var data=[];

var Table =  Titanium.UI.createTableView();

while (rows.isValidRow()) {

  //Displays all the categories
	var TableRow = Titanium.UI.createTableViewRow({text:rows.fieldByName('name')});

	var Switch = Titanium.UI.createSwitch({
		title:rows.fieldByName('name'),
		style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		right:10,
		value:true
	});
	TableRow.add(Switch)
	
	//If customer wants to delete a category
	Switch.addEventListener('change', function(e) {
		var db = Titanium.Database.open('appDatabase');
		db.execute ('DELETE FROM categories WHERE name=?',e.source.title);
		db.execute ('DELETE FROM contacts WHERE category=?',e.source.title);
		db.close();
		var win3 = Titanium.UI.createWindow({
			backgroundColor:'#fff',		    
			title:'5.1',
			url:'app.js',
		});
		win3.open();
	});
	
	var Label = Ti.UI.createLabel({
		text:rows.fieldByName('name'),
		left:10,
		textAlign:'left'
	});
	TableRow.add(Label)
	//If customer wants go to a category
	Label.addEventListener('click', function(e) {
		var win3 = Titanium.UI.createWindow({
			backgroundColor:'#fff',		    
			title:'5.8',
			url:'viewcont.js',
			CatName:e.source.text
		});
		win3.open();
	});
	data.push(TableRow),
	rows.next()
}
Table.setData(data);

win.add(Table);
