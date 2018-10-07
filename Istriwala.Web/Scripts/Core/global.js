core.global = function () {
    this.onException = function (error) {
        core.session.setErrorStatus(error);
        core.session.setErrorDescription(error);
        window.location.href = '/exception/index';
    }
    this.logout = function () {
        sessionStorage.clear();
        window.location.href = '/home/login';
    }
    this.showUserName = function () {
        var u = core.session.getUser();
        if (u) {
            $('#topNav_User').text(u.displayName);
        }
    }
};
