define(['app/widgets/DemoWidget'], function(widget){
  describe("Demo Widget", function(){
    it("Exists", function(){
      expect(widget).toBeDefined();
    });

    it("Has a template", function(){
      var w1 = new widget();
      expect(w1.templateString).toContain('<div>${i18n.success}</div>');
    });

    it("Has an i18n Success string", function(){
      var w1 = new widget();
      expect(w1.i18n.success).toBe("Yay!");
    });

  });
});
