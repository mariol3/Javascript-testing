/*
 * Function that allow to create a new
 * Object with the given prototype.
 */
function inherit(prototype) {
   /* Prototype can't be null */
   if(prototype == null)
      throw TypeError();
   
   /* If Object.create is defined (ECMAScript 5)
    * then return a new object with this method
    */
   if(Object.create)
      return Object.create(prototype);
   
   /* If Object.create is not defined
    * use the old constructor method
    */
   var t = typeof prototype;
   if(t !== "object" && t !== "function")
      throw TypeError();
   
   function f() {};
   f.prototype = prototype;
   
   return new f();
}

/*
 * Cross browsers log function
 */
function log() {
	try {
		console.log.apply(console, arguments);
	} catch(e) {
		try {
			opera.postError().apply(opera, arguments);
		} catch(e) {
			alert(Array.prototype.join.call(arguments, " "));
		}
	}
}

/*
 * Simple testing function, works better
 * with the associated CSS "my-utils.css"
 */
function assert(value, description) {
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(description));
	document.getElementById("results").appendChild(li);
}
