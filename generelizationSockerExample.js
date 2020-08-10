"use strict";
var generelizationSockerExample;
(function (generelizationSockerExample) {
    let ClubHomeCountry;
    (function (ClubHomeCountry) {
        ClubHomeCountry[ClubHomeCountry["England"] = 0] = "England";
        ClubHomeCountry[ClubHomeCountry["Germany"] = 1] = "Germany";
    })(ClubHomeCountry || (ClubHomeCountry = {}));
    class FootballClub {
        getName() {
            return this._nameClub;
        }
        getHomeCountry() {
            return this._homeCountry;
        }
    }
    class Liverpool extends FootballClub {
        constructor() {
            super();
            this._nameClub = 'Liverpool';
            this._homeCountry = ClubHomeCountry.England;
        }
    }
    class BorrusiaDortmund extends FootballClub {
        constructor() {
            super();
            this._nameClub = 'Borrusia';
            this._homeCountry = ClubHomeCountry.Germany;
        }
    }
    class FootbalClubPrinter {
        print(arg) {
            console.log(`The ${arg.getName()} is ${this.isEnglandTeam(arg)} England Team Club.`);
        }
        isEnglandTeam(arg) {
            if (arg.getHomeCountry() == ClubHomeCountry.England) {
                return '';
            }
            else {
                return 'Not';
            }
        }
    }
    let clubInfo = new FootbalClubPrinter();
    clubInfo.print(new Liverpool());
    clubInfo.print(new BorrusiaDortmund());
})(generelizationSockerExample || (generelizationSockerExample = {}));
