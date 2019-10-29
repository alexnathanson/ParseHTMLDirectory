//parses the HTML get request for the files names
// XMLHttpRequest reference https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getResponseHeader

class HTMLDirectory{
	constructor(tempIP,tempDirectory){
		this.ip = tempIP;
		this.directory = tempDirectory;
		this.path = this.ip + this.directory;
		this.list = [];
	}

	getDir(){
	  let client = new XMLHttpRequest();
	  client.responseType = 'text';
	  client.open("GET", this.path, true);

	  client.send();

	  //the arrow functions maintains the scope
	  client.onreadystatechange =()=>{
	  	if(client.readyState === 4 && client.status === 200) {
		    //console.log(client.responseText);
		    this.parseList(client.responseText);
		  }
	  };
	}

	parseList(arg){
		let fileList=arg.split('\n');
		//console.log(fileList);
		for(let i=0;i<fileList.length;i++){
			//check if the item contains a HREF tag
			if(fileList[i].includes('HREF')){
				let fileInfo=fileList[i].split('\"');
			    //console.log(fileInfo);
			    for(let f = 0; f<fileInfo.length;f++){
			    	if(fileInfo[f].includes(this.directory)){
			    		let len = this.directory.length;
			    		this.list.push(fileInfo[f].slice(len,fileInfo[f].length));
			    		//console.log(fileInfo[f].slice(len,fileInfo[f].length));
			    	}
			    }
			}
		}
		console.log(this.list);
	}
}