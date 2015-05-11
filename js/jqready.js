var path1 = "html/gopkgs/"

var jqready = function () {

  var highlight = function() {
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});	  
  }
  
  function newHandler(func, str) {
	  func = function() {
		$.get(path1 + str + ".html", function( data ) {
		  $("#div9").html(data)
		
		  highlight() 
	    });	 	  
	  }
	
	  return func
  }
   
  var f; //handler function

  var routes = {
	'/anchor': newHandler(f, "anchor"),
	'/kiss': newHandler(f, "kiss"),
	'/httprouter': newHandler(f, "httprouter"),
	'/jwt':  newHandler(f, "jwt"),
	'/salt': newHandler(f, "salt"),
	'/nacl': newHandler(f, "nacl"),
	'/hmac': newHandler(f, "hmac"),
	'/emission': newHandler(f, "emission"),
	'/blackfriday': newHandler(f, "blackfriday"),
	'/bluemonday': newHandler(f, "bluemonday"),
	'/mysql': newHandler(f, "mysql"),
	'/postgresql': newHandler(f, "postgresql"),
	'/sqlite': newHandler(f, "sqlite"),
	'/graph': newHandler(f, "graph"),
	'/cayley': newHandler(f, "cayley"),
	'/remarshal': newHandler(f, "remarshal"),
	'/mustache': newHandler(f, "mustache"),
	'/jason': newHandler(f, "jason"),
	'/bolt': newHandler(f, "bolt"),
	'/influxdb': newHandler(f, "influxdb"),
	'/graphviz': newHandler(f, "graphviz"),
	'/gosl': newHandler(f, "gosl"),
	'/ginkgo': newHandler(f, "ginkgo"),
	'/gomega': newHandler(f, "gomega"),
	'/testify': newHandler(f, "testify"),
	'/goblin': newHandler(f, "goblin"),
	'/endless': newHandler(f, "endless"),
	'/echo': newHandler(f, "echo")
  }
  
  var router = Router(routes);
  router.init();  
  
  divH = newHandler(f, "anchor") //default href link
  divH() //call function to populate home page

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  
}