//use webpack or browserify

let dirList = new HTMLDirectory('http://172.16.1.17','/31D73S000475/Update/', callIt);

dirList.getDir();

function callIt(){
	console.log(dirList.list);
}