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
