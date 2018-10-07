core.wrappers = function () {
  
    var baseUrl = "http://localhost:49790";

    // Global AJAX progress indicator set-up
    $(document).ajaxStart(function () {
        $('#globalWaiting').show();
    });
    $(document).ajaxStop(function () {
        $('#globalWaiting').hide();
    });

    this.accessData = function (args) {
        $('.btn-primary').addClass('disabled');
        var token = core.session.getToken();
        var headers = {};
        if (token) {
            headers.Authorization = 'Bearer ' + token;
        }
        var ct = "application/json; charset=utf-8";
        if (args.contentType) {
            ct = args.contentType;
        }
        var d = $.ajax({
            type: args.verb,
            url: baseUrl + args.url,
            data: args.data,
            contentType: ct,
            headers: headers
        }).done(function (data) {
            if (args.parameter && args.callBack)
                args.callBack(data, parameter);
            else {
                if (args.callBack) {
                    args.callBack(data);
                }
            }
        }).fail(function (error) {
            if (args.failCallback) {
                args.failCallback(error);
            } else {
                core.global.onException(error);
            }
        }).always(function (data) {
            $('.btn-primary').removeClass('disabled');
        });
        return d;
    }

    this.uploadFile = function (args) {
        $('.btn-primary').addClass('disabled');
        var token = core.session.getToken();
        var headers = {};
        if (token) {
            headers.Authorization = 'Bearer ' + token;
        }
        $.ajax({
            type: args.verb,
            url: baseUrl + args.url,
            data: args.data,
            cache: false,
            contentType: false,
            processData: false,
            headers: headers
        }).success(function (data) {
            if (args.parameter && args.callBack)
                args.callBack(data, parameter);
            else {
                if (args.callBack) {
                    args.callBack(data);
                }
            }
        }).fail(function (error) {
            if (args.failCallback) {
                args.failCallback(error);
            } else {
                core.global.onException(error);
            }
        }).complete(function (data) {
            $('.btn-primary').removeClass('disabled');
        });
    }
};