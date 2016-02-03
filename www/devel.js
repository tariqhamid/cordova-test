define([
    './testing',
    'amber/devel',
    // --- packages used only during development begin here ---
    'amber-ambercordova/Timer-Tests',
    'amber-ambercordova/LindaClient-Tests',
    'amber/legacy/Benchfib',
    'amber/legacy/Examples',
    'amber/legacy/IDE'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});
