//Install the sqlite database from the file
Ti.Database.install('appDatabase.sqlite','appDatabase');

(function(){

var window = Titanium.UI.createWindow({
    title:'5.1',
    backgroundColor:'#fff',
});

var button = Titanium.UI.createButton({
    title: 'Add Contact',
    top:70,
    left: 20,
    width: 200,
    height: 35,
});
//If click go to Add a contact to the database
button.addEventListener('click',function(){
  var win2 = Titanium.UI.createWindow({
	    title:'5.2',
	    url:'options.js'
	});
	win2.open();
});

var button2 = Titanium.UI.createButton({
    title: 'View Categories',
    top:125,
    left: 20,
    width: 200,
    height: 35
});
//If click go to View Contacts (Category)
button2.addEventListener('click',function(){
	var win2 = Titanium.UI.createWindow({
		backgroundColor:'#fff',
	    title:'5.5',
	    url:'viewcat.js'
	});
	win2.open();
});
//Add buttons to the window
window.add(button);
window.add(button2);
window.open();
})();
