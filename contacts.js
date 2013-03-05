var win = Ti.UI.currentWindow;

var values = {cancel:function() {info.text = 'Cancelled';}};

if (Ti.Platform.osname === 'android') {
  //Select a contact from the phonebook
	values.selectedPerson = function(e){
		var win2 = Titanium.UI.createWindow({
			backgroundColor:'#fff',
			title:'5.6',
			url:'list.js',
			CName:e.person.fullName	//Takes the contact name and stores in CName
		});
		win2.open();
		win.close();
	};
}
//Show contacts from the device
Titanium.Contacts.showContacts(values);
