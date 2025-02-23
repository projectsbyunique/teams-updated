//% weight=100
//% color=#6C5CA4
namespace Teams {
    export const enum TeamEnum {
        ARI, ATL, BAL, BUF, CAR, CHI, CIN, CLE, DAL, DEN, DET, GB, HOU, IND, JAX, KC, LV, LAC, LAR, MIA, MIN, NE, NO, NYG, NYJ, PHI, PIT, SF, SEA, TB, TEN, WAS
    }

    export const enum TeamProperty {
        TeamLocation,
        TeamAbbreviation,
        MainColor,
        SecondaryColor,
        SockColor,
        Rating // Added Rating property
    }

    // SOCK COLOR IS ALSO FOR SHOULDER COLORS (trick to get three colors without messing with a ton of code.)
    const teamData: {
        teamLocation: string;
        teamAbbreviation: string;
        mainColor: number;
        secondaryColor: number;
        sockColor: number;
        rating: number; // Added rating property
    }[] = [
            { teamLocation: "Arizona", teamAbbreviation: "ARI", mainColor: 1, secondaryColor: 2, sockColor: 2, rating: 2 },
            { teamLocation: "Atlanta", teamAbbreviation: "ATL", mainColor: 15, secondaryColor: 2, sockColor: 2, rating: 3 },
            { teamLocation: "Baltimore", teamAbbreviation: "BAL", mainColor: 15, secondaryColor: 10, sockColor: 10, rating: 5 },
            { teamLocation: "Buffalo", teamAbbreviation: "BUF", mainColor: 1, secondaryColor: 8, sockColor: 2, rating: 4 },
            { teamLocation: "Carolina", teamAbbreviation: "CAR", mainColor: 15, secondaryColor: 8, sockColor: 9, rating: 1 },
            { teamLocation: "Chicago", teamAbbreviation: "CHI", mainColor: 15, secondaryColor: 4, sockColor: 4, rating: 3 },
            { teamLocation: "Cincinnati", teamAbbreviation: "CIN", mainColor: 4, secondaryColor: 1, sockColor: 15, rating: 4 },
            { teamLocation: "Cleveland", teamAbbreviation: "CLE", mainColor: 4, secondaryColor: 15, sockColor: 1, rating: 4 },
            { teamLocation: "Dallas", teamAbbreviation: "DAL", mainColor: 1, secondaryColor: 13, sockColor: 8, rating: 4 },
            { teamLocation: "Denver", teamAbbreviation: "DEN", mainColor: 4, secondaryColor: 1, sockColor: 8, rating: 2 },
            { teamLocation: "Detroit", teamAbbreviation: "DET", mainColor: 13, secondaryColor: 8, sockColor: 8, rating: 4 },
            { teamLocation: "Green Bay", teamAbbreviation: "GB", mainColor: 5, secondaryColor: 6, sockColor: 15, rating: 3 },
            { teamLocation: "Houston", teamAbbreviation: "HOU", mainColor: 2, secondaryColor: 15, sockColor: 15, rating: 3 },
            { teamLocation: "Indianapolis", teamAbbreviation: "IND", mainColor: 8, secondaryColor: 13, sockColor: 8, rating: 3 },
            { teamLocation: "Jacksonville", teamAbbreviation: "JAX", mainColor: 15, secondaryColor: 13, sockColor: 6, rating: 4 },
            { teamLocation: "Kansas City", teamAbbreviation: "KC", mainColor: 2, secondaryColor: 1, sockColor: 5, rating: 5 },
            { teamLocation: "Las Vegas", teamAbbreviation: "LV", mainColor: 13, secondaryColor: 15, sockColor: 15, rating: 3 },
            { teamLocation: "Los Angeles C", teamAbbreviation: "LAC", mainColor: 1, secondaryColor: 5, sockColor: 9, rating: 4 },
            { teamLocation: "Los Angeles R", teamAbbreviation: "LAR", mainColor: 8, secondaryColor: 5, sockColor: 5, rating: 4 },
            { teamLocation: "Miami", teamAbbreviation: "MIA", mainColor: 1, secondaryColor: 4, sockColor: 6, rating: 4 },
            { teamLocation: "Minnesota", teamAbbreviation: "MIN", mainColor: 10, secondaryColor: 5, sockColor: 5, rating: 3 },
            { teamLocation: "New England", teamAbbreviation: "NE", mainColor: 13, secondaryColor: 8, sockColor: 2, rating: 2 },
            { teamLocation: "New Orleans", teamAbbreviation: "NO", mainColor: 15, secondaryColor: 13, sockColor: 13, rating: 3 },
            { teamLocation: "New York G", teamAbbreviation: "NYG", mainColor: 8, secondaryColor: 1, sockColor: 2, rating: 2 },
            { teamLocation: "New York J", teamAbbreviation: "NYJ", mainColor: 1, secondaryColor: 6, sockColor: 6, rating: 3 },
            { teamLocation: "Philadelphia", teamAbbreviation: "PHI", mainColor: 6, secondaryColor: 1, sockColor: 15, rating: 5 },
            { teamLocation: "Pittsburgh", teamAbbreviation: "PIT", mainColor: 15, secondaryColor: 1, sockColor: 5, rating: 3 },
            { teamLocation: "San Francisco", teamAbbreviation: "SF", mainColor: 2, secondaryColor: 1, sockColor: 13, rating: 5 },
            { teamLocation: "Seattle", teamAbbreviation: "SEA", mainColor: 6, secondaryColor: 1, sockColor: 7, rating: 4 },
            { teamLocation: "Tampa Bay", teamAbbreviation: "TB", mainColor: 2, secondaryColor: 11, sockColor: 11, rating: 3 },
            { teamLocation: "Tennessee", teamAbbreviation: "TEN", mainColor: 8, secondaryColor: 6, sockColor: 6, rating: 3 },
            { teamLocation: "Washington", teamAbbreviation: "WAS", mainColor: 14, secondaryColor: 1, sockColor: 5, rating: 2 }
        ];

    export class Team {
        teamEnum: TeamEnum;
        teamLocation: string;
        teamAbbreviation: string;
        mainColor: number;
        secondaryColor: number;
        sockColor: number;
        rating: number; // Added rating property

        constructor(teamEnum: TeamEnum) {
            this.teamEnum = teamEnum;
            const data = teamData[teamEnum];
            this.teamLocation = data.teamLocation;
            this.teamAbbreviation = data.teamAbbreviation;
            this.mainColor = data.mainColor;
            this.secondaryColor = data.secondaryColor;
            this.sockColor = data.sockColor;
            this.rating = data.rating; // Initialize rating
        }

        // Method to get the TeamEnum associated with this team
        getTeamEnum(): TeamEnum {
            return this.teamEnum;
        }
    }

    //% block
    export function getTeamData(team: TeamEnum): {
        teamLocation: string;
        teamAbbreviation: string;
        mainColor: number;
        secondaryColor: number;
        sockColor: number;
        rating: number; // Added rating property
    } {
        return teamData[team];
    }

    //% block="get property $property from team $team"
    //% property.defl=TeamProperty.TeamLocation
    //% team.shadow="team_enum_shim"
    export function getTeamProperty(team: number, property: TeamProperty): string | number {
        let data = teamData[team];
        switch (property) {
            case TeamProperty.TeamLocation:
                return data.teamLocation;
            case TeamProperty.TeamAbbreviation:
                return data.teamAbbreviation;
            case TeamProperty.MainColor:
                return data.mainColor;
            case TeamProperty.SecondaryColor:
                return data.secondaryColor;
            case TeamProperty.SockColor:
                return data.sockColor;
            case TeamProperty.Rating: // Added case for Rating
                return data.rating;
            default:
                return "";
        }
    }

    //% block="$team"
    //% blockId=team_enum_shim
    //% team.defl=TeamEnum.PHI
    export function getTeamFromEnum(team: TeamEnum): TeamEnum {
        return team;
    }

    //% block="contains color key $img ?"
    //% img.shadow=dialog_image_picker
    export function containsColors(img: Image): boolean {
        let found2 = false;
        let found8 = false;
        let found7 = false;
        for (let x = 0; x < img.width; x++) {
            for (let y = 0; y < img.height; y++) {
                let pixelColor = img.getPixel(x, y);
                if (pixelColor === 9) {
                    found2 = true;
                } else if (pixelColor === 3) {
                    found8 = true;
                } else if (pixelColor === 7) {
                    found7 = true;
                }
                // If all colors are found, return true immediately
                if (found2 && found8 && found7) {
                    return true;
                }
            }
        }
        return false; // If any color is missing, return false
    }

    //% block="array of teams"
    export function getAllTeamsEnum(): TeamEnum[] {
        return [
            TeamEnum.PHI, // Philadelphia Eagles
            TeamEnum.KC, // Kansas City Chiefs
            TeamEnum.DEN, // Denver Broncos
            TeamEnum.ARI, // Arizona Cardinals
            TeamEnum.ATL, // Atlanta Falcons
            TeamEnum.BAL, // Baltimore Ravens
            TeamEnum.BUF, // Buffalo Bills
            TeamEnum.CAR, // Carolina Panthers
            TeamEnum.CIN, // Cincinnati Bengals
            TeamEnum.CLE, // Cleveland Browns
            TeamEnum.DAL, // Dallas Cowboys
            TeamEnum.DET, // Detroit Lions
            TeamEnum.GB, // Green Bay Packers
            TeamEnum.HOU, // Houston Texans
            TeamEnum.IND, // Indianapolis Colts
            TeamEnum.JAX, // Jacksonville Jaguars
            TeamEnum.LAC, // Los Angeles Chargers
            TeamEnum.LAR, // Los Angeles Rams
            TeamEnum.MIA, // Miami Dolphins
            TeamEnum.MIN, // Minnesota Vikings
            TeamEnum.NE, // New England Patriots
            TeamEnum.NO, // New Orleans Saints
            TeamEnum.NYG, // New York Giants
            TeamEnum.NYJ, // New York Jets
            TeamEnum.LV, // Las Vegas Raiders
            TeamEnum.PIT, // Pittsburgh Steelers
            TeamEnum.SF, // San Francisco 49ers
            TeamEnum.SEA, // Seattle Seahawks
            TeamEnum.TB, // Tampa Bay Buccaneers
            TeamEnum.TEN, // Tennessee Titans
            TeamEnum.WAS // Washington Commanders
        ];
    }
}