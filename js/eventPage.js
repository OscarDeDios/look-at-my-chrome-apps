//
//mychromeapps.window = chrome.extension.getBackgroundPage();
//
//chrome.management.getAll(function(extensionInfos) {
//    mychromeapps.extensionInfos = extensionInfos;
//    
//    var ul = mychromeapps.window.getElementById("ul-extensions");
//    ul.innerHTML = "<li>StackEdit</li><li>Adblock</li>";
//});
//
////		var counter = extensionsShare.populateExtensions(extensionInfos);
////
////		if(counter === 0){
////			$('#developer_tools').hide();
////			$('.extension-name').show();
////			$('#try_gallery').html('<a href="#">...</a>');
////		}
////		$('#extensions_length').html(counter);
////
////		addListeners();
//
////	$('.label_select').click(function() {
////		console.log('select', $(this).data('select'));
////		selectExtensions($(this).data('select'));
////	});
////
////
////	$('.label_export a').click(function() {
////		console.log('exportTo', $(this).data('exportto'));
////		extensionsShare.exportTo($(this).data('exportto'));
////	});
////
////	$('#label_send_via_gmail').click(function() {
////		console.log('sendTo', $(this).data('sendto'));
////		sendTo($(this).data('sendto'));
////	});
//
//
