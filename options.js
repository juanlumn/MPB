var win = Titanium.UI.currentWindow;
//Options: Chose from device, Add new, Cancel
var dialog = Titanium.UI.createOptionDialog(({ 
  options: ['Chose from device contacts','Add new','Cancel'],	 
	cancel:2	
}))

dialog.addEventListener('click',function(e){
	//Chose from device
	if (e.index==0){
		var win2 = Titanium.UI.createWindow({
			backgroundColor:'#fff',	    
			title:'5.3',		    
			url:'contacts.js'		
		});		
		win2.open();		
		win.close();
	} 
	//Add new
	if (e.index==1){		
		var win2 = Titanium.UI.createWindow({
			backgroundColor:'#fff',		    
			title:'5.4',
			url:'addnew.js'	
		});		
		win2.open();
		win.close();
	}
	
	if (e.index==2){	
		win.close();
	}
});
dialog.show();
//Add dialog to the window
win.add(dialog);
