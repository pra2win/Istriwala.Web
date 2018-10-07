$(document).ready(function () {
    // Init global vars
    core.global = new core.global();
    core.session = new core.session();
    core.wrappers = new core.wrappers();
    //core.utilities = new core.utilities();
    //core.koUtilities = new core.koUtilities();
    //// Load KO extensions
    //core.koUtilities.loadCustomBindings();
    //core.koUtilities.loadExtenders();
    // Top-level event wiring
    $('#topNavLogout').click(core.global.logout);
    $('.topNavReset').click(function () {
        core.session.clear();
    });
    // Top-level function calls
    core.global.showUserName();
});