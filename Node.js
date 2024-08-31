class Node {
   constructor(accountNumber, balance,next=null) {
     this.accountNumber = accountNumber;
     this.balance = balance;
     this.next = next;
   }
 }
module.exports=Node; 