define(['app/core/controller'], function (controller) {

    describe("The Controller", function () {
        it("Should exist", function () {
            expect(controller).toBeDefined();
        });

        it("Has a name", function () {
            expect(controller.name).toEqual("Controller");
        });

        it("Can load views", function() {
            controller.showView({name:'view1'});
            expect(controller.currentView.name).toBe('view1');
        });
    });

})
