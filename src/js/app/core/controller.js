define([], function () {
    return {
        name: "Controller",

        showView: function (newView) {
            this.currentView = newView;
        }

    };
});