namespace generelizationSockerExample{
    enum ClubHomeCountry{
        England,
        Germany
    }

    interface IFootballClub {
        getName(): string | undefined;
        getHomeCountry(): ClubHomeCountry | undefined;
    }

    interface IFootballClubPrinter {
    }

    abstract class FootballClub implements IFootballClub{
        protected _nameClub:string | undefined;
        protected _homeCountry:ClubHomeCountry | undefined;
        getName(){
            return this._nameClub;
        }
        getHomeCountry(){
            return this._homeCountry;
        }
    }

    class Liverpool extends FootballClub{
        constructor() {
            super();
            this._nameClub = 'Liverpool';
            this._homeCountry = ClubHomeCountry.England;
        }
    }

    class BorrusiaDortmund extends FootballClub{
        constructor() {
            super();
            this._nameClub = 'Borrusia';
            this._homeCountry = ClubHomeCountry.Germany;
        }

    }

    class FootbalClubPrinter<T extends IFootballClub> implements IFootballClubPrinter{
        print(arg :T){
            console.log(`The ${arg.getName()} is ${this.isEnglandTeam(arg)} England Team Club.`);
        }
        isEnglandTeam(arg : T):string{
            if(arg.getHomeCountry() == ClubHomeCountry.England){
                return '';
            }
            else{
                return 'Not';
            }
        }
    }
    let clubInfo = new FootbalClubPrinter();
    clubInfo.print(new Liverpool());
    clubInfo.print(new BorrusiaDortmund());
}