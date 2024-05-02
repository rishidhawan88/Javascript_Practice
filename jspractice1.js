console.log('hello world');

const cart=['whey protein','peanut butter','creatine'];

createOrder(cart)
.then((orderId)=>{
    return procedeToPayment(orderId);
})
.then((paymentId)=>{
    return showOrder(paymentId);
})
.then((walletbalance)=>{
    return updateWallet(walletbalance);
})
.then(()=>{
    console.log('order placed and wallet updated succesfully');
})
.catch(function(err){
    console.log(err.message);
    
});

function createOrder(cart){
    return new Promise(function(resolve,reject){
        let flag=true;
        if(flag==true){
            console.log('cart validated and order created');
            const orderId=123;
            resolve(orderId);
        }
        else{
            const err=new Error('cart is not right');  
            reject(err);
        }
    })
}

function procedeToPayment(orderId){
    return new Promise((resolve,reject)=>{
        let flag=false;
        if(flag==true){
            console.log(`payment validated for order id ${orderId}`);
            const paymentId=456;
            resolve(paymentId);
        }
        else{
            const err=new Error('payment is not done');
            reject(err);
        }
    })
}

function showOrder(paymentId){
    return new Promise((resolve,reject)=>{
        let flag=true;
        if(flag==true){
            console.log(`your payment id is ${paymentId}`);
            const updatedBalance=3000;
            resolve(updatedBalance);
        }
        else{
            const err=new Error('balannce is low');
            reject(err);
        }
    })
}

function updateWallet(updatedBalance){
    return new Promise((resolve,reject)=>{
        let flag=true;
        if(flag==true){
            console.log(`Wallet Balance is ${updatedBalance}`);
            
            resolve();
        }
        else{
            const err=new Error('wallet balance not found');
            reject(err);
        }
    })
}

