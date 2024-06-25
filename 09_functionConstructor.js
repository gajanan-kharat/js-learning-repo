
function Player(fullName, totalRuns){
    this.fullName = fullName;
    this.totalRuns = totalRuns;
}
const kohli = new Player("Virat Kohli", 47000);
const rohit = new Player("Rohit Sharma", 30000);
const rishabh = new Player("Rishabh Pant", 50000);
const shami = new Player("Mohammad Shami", 1000);
Player.prototype.country = "India";

console.log(`${kohli.fullName}, ${kohli.totalRuns}, ${kohli.country}`);
console.log(`${rohit.fullName}, ${rohit.totalRuns}, ${rohit.country}`);
console.log(`${rishabh.fullName}, ${rishabh.totalRuns}, ${rishabh.country}`);
console.log(`${shami.fullName}, ${shami.totalRuns}, ${shami.country}`);

const date = new Date();
console.log(date.getFullYear());

function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;

}

const yesBank = new Bank("Yes Bank", "Wakad", "YES000889", 7900);
console.log(`Yes Bank Details: ${yesBank.yesBank}, ${yesBank.location}`);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime ="6 PM IST";

console.log(`Sbi Bank Open time ${sbiBank.openTime} and it's close time ${sbiBank.closeTime}`);


