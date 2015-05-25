/// <reference path="libs/bobril.d.ts"/>
/// <reference path="libs/bobril.router.d.ts"/>
/// <reference path="libs/bobril.onchange.d.ts"/>
var Dianotes;
(function (Dianotes) {
    var SessionModel = (function () {
        function SessionModel(username, email) {
            this.username = username;
            this.email = email;
        }
        return SessionModel;
    })();
    Dianotes.SessionModel = SessionModel;
})(Dianotes || (Dianotes = {}));
