function appleSetting(){
    var boxappleCost =0 ;
    var numberApple=0;
    var packet =0;
    var profitPercentage=0

   function appleBoxCost(price){
    return boxappleCost = price;
   }
   function appleBox(number){
    return numberApple= number;
   }
   function packetNumSize(weight){
    return packet = weight;
    function profit(percentage){
    profitPercentage= (percentage/100);
   }
   //function that will get values
    function getappleBox(){
     return boxappleCost;
     }
     function getApplePerbag(){
     return numberApple;
     }
     function getPacketweight(){
     return packet;
     }
     function getProfit(){
     return profitPercentage;
     }
     return{
     appleBoxCost
    appleBox,
    packetNumSize,
    profit,
    getappleBox,
    getApplePerbag,
    getPacketweight,
     getProfit
     }
    
    
    
     
     


