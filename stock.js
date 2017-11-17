function Stock(n,t,i,v,q){
  this.name=n;
  this.ticker=t;
this.index=i;
this.value=v;
this.quantity=q;

this.totalValue= function(){
  return this.value*this.quantity;
}
    //Initialize the instance variables below
this.sell=function(q){
  if(this.quantity>0 && q<=this.quantity);
  this.quantity=this.quantity-q;
  return this.value*q;
}

    //declare and define totalValue function below




    //declarea and define sell(q) function below


}

module.exports = Stock;
