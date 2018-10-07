function login(uid, pwd) {
    $('#loginFailed').hide();
    $('#loaderLogin').show();
    var loginData = 'grant_type=password&username=' + uid + '&password=' + pwd;
    core.wrappers.accessData({
        'verb': 'POST'
        , 'url': '/token'
        , 'callBack': loginSuccess
        , 'data': loginData
        , 'contentType': 'application/x-www-form-urlencoded'
        , 'failCallback': loginFailure
    });
}
function loginSuccess(data) {
    $('#loaderLogin').hide();
    core.session.setUser(data);
    core.session.setToken(data);
    core.session.clear();
    window.location.href = '/dashboard/index';
}
function loginFailure(error) {
    $('#loaderLogin').hide();
    $('#loginFailed').show();
    $('#txtUid').val('');
    $('#txtPwd').val('');
    $('#txtUid').focus();
}
$(document).ready(function () {
    // If the user simply navigated away from mgr in the same tab,
    // but didn't log out, there's no reason to force him to log
    // in again. Therefore, if we have a security token, simply
    // redirect to the dashboard
    var uToke = core.session.getToken();
    if (uToke) {
        window.location.href = '/dashboard/index';
    } else {
        $('[data-toggle="tooltip"]').tooltip();
        $('#txtUid').focus();
        $('#btnLogin').click(function () {
            var uid = $('#txtUid').val();
            var pwd = $('#txtPwd').val();
            login(uid, pwd);
        });
        $(document).keypress(function (e) {
            if (e.which === 13) {
                var uid = $('#txtUid').val();
                var pwd = $('#txtPwd').val();
                login(uid, pwd);
            }
        });
    }
});