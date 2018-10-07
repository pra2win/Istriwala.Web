core.session = function () {
    var _tokenKey = 'accessToken';
    var _errorStatusKey = 'errorStatus';
    var _errorDescriptionKey = 'errorDescription';
    var _currentUserKey = 'currentUser';
 
    this.setUser = function (data) {
        var displayName;
        if (data.name) { displayName = data.name; } else { displayName = data.userName; }
        var user = {
            "id": data.userId,
            "name": displayName,
            "email": data.userEmail,
            "roles": data.roles
        };
        sessionStorage.removeItem(_currentUserKey);
        sessionStorage.setItem(_currentUserKey, JSON.stringify(user));
    }
    this.getUser = function () {
        var u = sessionStorage.getItem(_currentUserKey);
        return JSON.parse(u);
    }
    this.setToken = function (data) {
        sessionStorage.removeItem(_tokenKey);
        sessionStorage.setItem(_tokenKey, data.access_token);
    }
    this.getToken = function () {
        return sessionStorage.getItem(_tokenKey);
    }
   
   
    this.setErrorStatus = function (error) {
        if (error.status) {
            sessionStorage.setItem(_errorStatusKey, error.status);
        }
    }
    this.getErrorStatus = function () {
        return sessionStorage.getItem(_errorStatusKey);
    }
    this.setErrorDescription = function (error) {
        if (error.responseJSON.error_description) {
            sessionStorage.setItem(_errorDescriptionKey, error.responseJSON.error_description);
        } else if (error.responseJSON.Message) {
            sessionStorage.setItem(_errorDescriptionKey, error.responseJSON.Message);
        }
    }
    this.getErrorDescription = function () {
        return sessionStorage.getItem(_errorDescriptionKey);
    }
    this.clearError = function () {
        sessionStorage.removeItem(_errorStatusKey);
        sessionStorage.removeItem(_errorDescriptionKey);
    }
    // Clear transient state, like current client, current product, etc.
    this.clear = function () {
        //sessionStorage.removeItem(_activeCli);
        var i = sessionStorage.length;
        while (i--) {
            var key = sessionStorage.key(i);
            if (/gridStateKey/.test(key)) {
                sessionStorage.removeItem(key);
            }
        }
    }
    this.clearToken = function () {
        sessionStorage.removeItem(_tokenKey);
    }

};