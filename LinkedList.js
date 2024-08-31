const Node=require("./Node")

class LinkedList {
   constructor() {
     this.head = null;
   }
 
   addNode(accountNumber, balance) {
     const newNode = new Node(accountNumber, balance);
     if (!this.head) {
       this.head = newNode;
     } else {
       let current = this.head;
       while (current.next) {
         current = current.next;
       }
       current.next = newNode;
     }
   }

 
 }
 module.exports=LinkedList;
 