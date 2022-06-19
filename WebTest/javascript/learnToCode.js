var myAccountBalance = 300;
var nikeSBShoes = 790.23;
var coupon = 500;

if (nikeSBShoes <= myAccountBalance){
    myAccountBalance -= nikeSBShoes;
    console.log('We just bought some dope shoes');
    console.log('Account balance: ' + myAccountBalance);
} else if(nikeSBShoes - coupon <= myAccountBalance) { 
    console.log('We just bought some dope shoes with a coupon');
    myAccountBalance -= nikeSBShoes - coupon;
    console.log('Account balance: ' + myAccountBalance);
} else {
    console.log('You too broke for shoes braw');
}