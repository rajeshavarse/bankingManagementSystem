const LinkedList=require("./LinkedList")
class Bank {
   constructor() {
     this.accounts = new LinkedList();
   }
 
   addAccount(accountNumber, balance) {
     this.accounts.addNode(accountNumber, balance);
   }
 
   findAccount(accountNumber) {
     let current = this.accounts.head;
     while (current) {
       if (current.accountNumber === accountNumber) {
         return current;
       }
       current = current.next;
     }
     return null;
   }
   transfer(fromAccount, toAccount, amount) {
      const from = this.findAccount(fromAccount);
      const to = this.findAccount(toAccount);
    
      if (from && to && from.balance >= amount) {
        from.balance -= amount;
        to.balance += amount;
        console.log(`Transferred ${amount} from ${fromAccount} to ${toAccount}`);
      } else {
        console.log('Transfer failed. Check account balances or account numbers.');
      }
    }


    checkBalance(accountNumber) {
      const account = this.findAccount(accountNumber);
      if (account) {
        console.log(`Account ${accountNumber} balance: ${account.balance}`);
      } else {
        console.log('Account not found.');
      }
    }

 }
 module.exports=Bank;
 