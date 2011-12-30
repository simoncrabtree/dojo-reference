define(['dojo/ready', 
       'specs/smoketest', 
       'specs/controller_spec',
       'specs/widgets/DemoWidget_spec',
       'specs/features/featureone_spec'
    ], function (ready) {
    ready(function () {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var trivialReporter = new jasmine.TrivialReporter();

        jasmineEnv.addReporter(trivialReporter);
        //jasmineEnv.addReporter(new jasmine.ConsoleReporter());
        //jasmineEnv.addReporter(new jasmine.TeamcityReporter());
        

        jasmineEnv.specFilter = function (spec) {
            return trivialReporter.specFilter(spec);
        };

        var currentWindowOnload = window.onload;

        window.onload = function () {
            if (currentWindowOnload) {
                currentWindowOnload();
            }
            execJasmine();
        };

        function execJasmine() {
            jasmineEnv.execute();
        };

        execJasmine();

    });
});
