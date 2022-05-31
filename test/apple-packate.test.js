describe("he apple planner with settings factory function" , function(){
    it("should be able to set the amount cost of the box of apple", function(){
      let settingsApple =  AppleSetting();
      settingsApple.appleBoxCost(185);
      assert.equal(185, settingsApple.getappleBox());
      settingsApple2.appleBoxCost(105);
      assert.equal(105,settingsApple2.getappleBox());
    });

    it("should be able to set the number of apple in box", function(){
      let settingsApple =  AppleSetting();
       settingsApple.appleBox(100);
      assert.equal(100, settingsApple.getappleBox());
       let settingsApple2 =  AppleSetting();
       settingsApple2.appleBox(60);
      assert.equal(60,settingsApple.getappleBox());
    });
    it("should be able to set the the number of apples in the packet", function(){
     let settingsApple =  AppleSetting();
      settingsApple.appleBox(5);
      assert.equal(5, getApplePerbag();
       let settingsApple =  AppleSetting();
      settingsApple.appleBox(4);
      assert.equal(4, getApplePerbag();
    });
    it(""should be able to set the packet weight ", function(){
     let settingsApple =  AppleSetting();
      settingsApple.packetNumSize("5kg");
      assert.equal("5kg", getPacketweight();
       let settingsApple =  AppleSetting();
      settingsApple.packetNumSize("4kg");
      assert.equal("4kg", getPacketweight();
    
    })
    
   
