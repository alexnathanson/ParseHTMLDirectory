//parses the HTML get request for the files names
class HTMLDirectory{
	constructor(tempDirectory){
		this.directory = tempDirectory;
		this.list = [];
	}

	getDirectoryList(adr){
	  //based off of https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getResponseHeader
	  let client = new XMLHttpRequest(this.directory);
	  client.open("GET", , true);
	  client.send();

	  client.onreadystatechange = function() {
	    if(this.readyState == this.HEADERS_RECEIVED) {
	      let responseText = client.responseText;
	      
	      console.log(client);
	    }
	  }
	}

	parseDirList(){

	}
}