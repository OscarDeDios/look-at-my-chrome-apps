/*
require.config({
 baseUrl: '../bower_components',
 paths: {
    jquery: "jsquery/dist",
    bootstrap: "bootstrap/dist/js",
    markdown: "markdown/lib"
 },
});

var markdown = require( "markdown" ).markdown;
*/

/*
function $(id) {
  return document.getElementById(id);
}
*/

var exportthis = 
  "Look at what I use in Chrome for Web Development\n" +
  "\n" +    
  "- [Web Developer](https://chrome.google.com/webstore/detail/bfbameneiokkgbdmiekhjnmfkcnldhhm)\n" +
  "- [ColorZilla](https://chrome.google.com/webstore/detail/bhlhnicpbhignbdhedgjhgdocnmhomnp)\n" +
  "- [BuiltWith Technology Profiler](https://chrome.google.com/webstore/detail/dapjbgnjinbpoindlpdmhochffioedbn)\n" +
  "- [PageSpeed Insights (by Google)](https://chrome.google.com/webstore/detail/gplegfbjlmmehdoakndmohflojccocli)\n" +
  "- [ruul. Screen ruler](https://chrome.google.com/webstore/detail/mlbnpnlmfngmlcmkhjpbfokdphfehhjj)\n" +
  "\n" +
  "Exported with [Look At My Chrome Apps!](https://chrome.google.com/webstore/detail/chdafcbnfkfenoeejpaeenpdamhmalhe)\n";

$("#form_button1_richtext").removeClass("btn-info").attr("disabled", "disabled");
$("#form_button2_html").click(function() {
//  console.log( markdown.toHTML( exportthis ));
  console.log("HTML export not implemented yet");
});
$("#form_button3_markdown").click(function() {
  console.log( exportthis );
  copyToClipboard( exportthis );
  
});


function open_options_page() {
  console.log("LAMCH: Opening the options page");
  var createProperties = { url:"/views/options.html" };
  chrome.tabs.create(createProperties, callback_options_saved);
}
function callback_options_saved() {
      console.log("LAMCH: Options have been updated!");
}

function copyToClipboard( text ){
                document.getElementById("clipboard").innerHTML = text;
                copyDiv.unselectable = "off";
                copyDiv.focus();
                document.execCommand('SelectAll');
                document.execCommand("Copy", false, null);
                //document.body.removeChild(copyDiv);
}

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

/*

Look at what I use in Chrome for Web Development

- [Web Developer](https://chrome.google.com/webstore/detail/bfbameneiokkgbdmiekhjnmfkcnldhhm)
- [ColorZilla](https://chrome.google.com/webstore/detail/bhlhnicpbhignbdhedgjhgdocnmhomnp)
- [BuiltWith Technology Profiler](https://chrome.google.com/webstore/detail/dapjbgnjinbpoindlpdmhochffioedbn)
- [PageSpeed Insights (by Google)](https://chrome.google.com/webstore/detail/gplegfbjlmmehdoakndmohflojccocli)
- [ruul. Screen ruler](https://chrome.google.com/webstore/detail/mlbnpnlmfngmlcmkhjpbfokdphfehhjj)

Exported with [Look At My Chrome Apps!](https://chrome.google.com/webstore/detail/chdafcbnfkfenoeejpaeenpdamhmalhe)
*/