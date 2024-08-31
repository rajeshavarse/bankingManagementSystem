const Bank = require("./Bank");
const readline = require("readline");

const bank = new Bank();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainMenu() {
  console.log("\nChoose an action:");
  console.log("1. Add Account");
  console.log("2. Check Balance");
  console.log("3. Transfer Funds");
  console.log("4. view All accounts");

  console.log("5. Exit");

  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        addAccount();
        break;
      case "2":
        checkBalance();
        break;
      case "3":
        transferFunds();
        break;
        case "4":
          showAllAccounts();
          break;
        
      case "5":
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        mainMenu();
    }
  });

  function addAccount() {
    rl.question("Account Number: ", (accountNumber) => {
      rl.question("Initial Balance: ", (balance) => {
        bank.addAccount(accountNumber, parseFloat(balance));
        console.log("Account added!");
        mainMenu();
      });
    });
  }

  function checkBalance() {
    rl.question("Account Number: ", (accountNumber) => {
      bank.checkBalance(accountNumber);
      mainMenu();
    });
  }

  function transferFunds() {
    rl.question("From Account Number: ", (fromAccount) => {
      rl.question("To Account Number: ", (toAccount) => {
        rl.question("Amount: ", (amount) => {
          bank.transfer(fromAccount, toAccount, parseFloat(amount));
          mainMenu();
        });
      });
    });
  }

  function showAllAccounts(){
    bank.viewAllAccounts();
    mainMenu();
  }
}

mainMenu();
