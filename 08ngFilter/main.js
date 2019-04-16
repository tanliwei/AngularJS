var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function () {
    var Avengers = {};
    Avengers.cast = [{
        "name": "Robert Downey Jr.",
        "character": "Tony Stark / Iron Man"
    }, {
        "name": "Chris Evans",
        "character": "Steve Rogers / Captain America"
    }, {
        "name": "Mark Ruffalo",
        "character": "Bruce Banner / The Hulk"
    }, {
        "name": "Chris Hemsworth",
        "character": "Thor"
    }, {
        "name": "Scarlett Johansson",
        "character": "Natasha Romanoff / Black Widow"
    }, {
        "name": "Jeremy Renner",
        "character": "Clint Barton / Hawkeye"
    }, {
        "name": "Tom Hiddleston",
        "character": "Loki"
    }, {
        "name": "Clark Gregg",
        "character": "Agent Phil Coulson"
    }, {
        "name": "Cobie Smulders",
        "character": "Agent Maria Hill"
    }, {
        "name": "Stellan SkarsgÃ¥rd",
        "character": "Selvig"
    }, {
        "name": "Samuel L. Jackson",
        "character": "Nick Fury"
    }, {
        "name": "Gwyneth Paltrow",
        "character": "Pepper Potts"
    }, {
        "name": "Paul Bettany",
        "character": "Jarvis (voice)"
    }, {
        "name": "Alexis Denisof",
        "character": "The Other"
    }, {
        "name": "Tina Benko",
        "character": "NASA Scientist"
    }, {
        "name": "Jerzy Skolimowski",
        "character": "Georgi Luchkov"
    }, {
        "name": "Kirill Nikiforov",
        "character": "Weaselly Thug"
    }, {
        "name": "Jeff Wolfe",
        "character": "Tall Thug"
    }, {
        "name": "M'laah Kaur Singh",
        "character": "Young Girl"
    }, {
        "name": "Rashmi Rustagi",
        "character": "Calcutta Woman"
    }, {
        "name": "Powers Boothe",
        "character": "World Security Council"
    }, {
        "name": "Jenny Agutter",
        "character": "World Security Council"
    }, {
        "name": "Arthur Darbinyan",
        "character": "World Security Council"
    }, {
        "name": "Donald Li",
        "character": "World Security Council"
    }, {
        "name": "Warren Kole",
        "character": "Carrier BridgeTechs"
    }, {
        "name": "Alicia Sixtos",
        "character": "Carrier BridgeTechs"
    }, {
        "name": "Jesse Garcia",
        "character": "Carrier BridgeTechs"
    }, {
        "name": "Maximiliano HernÃ¡ndez",
        "character": "Agent Jasper Sitwell"
    }, {
        "name": "Dieter Riesle",
        "character": "Gala Scientist"
    }, {
        "name": "Kenneth Tigar",
        "character": "German Old Man"
    }, {
        "name": "Walter Perez",
        "character": "Young Shield Pilot"
    }, {
        "name": "Harry Dean Stanton",
        "character": "Security Guard"
    }, {
        "name": "Josh Cowdery",
        "character": "Maintenance Guy"
    }, {
        "name": "Ashley Johnson",
        "character": "Waitress"
    }, {
        "name": "Katsumi Komatsu",
        "character": "Japanese Family"
    }, {
        "name": "Yumiko Komatsu",
        "character": "Japanese Family"
    }, {
        "name": "Momoko Komatsu",
        "character": "Japanese Family"
    }, {
        "name": "Robert Clohessy",
        "character": "Police Sergeant"
    }, {
        "name": "Enver Gjokaj",
        "character": "Young Cop"
    }, {
        "name": "Fernanda Toker",
        "character": "Office Woman"
    }, {
        "name": "Andrea Vecchio",
        "character": "News Reporter"
    }, {
        "name": "Robin Swoboda",
        "character": "News Reporter"
    }, {
        "name": "Brent McGee",
        "character": "Faceless Pilot"
    }, {
        "name": "Jamie McShane",
        "character": "Celebration Montage Interviewee"
    }, {
        "name": "Michael Zhang",
        "character": "Celebration Montage Interviewee"
    }, {
        "name": "William Christopher Stephens",
        "character": "Celebration Montage Interviewee (as Wiliams Christopher Stevens)"
    }, {
        "name": "Kelley Robins",
        "character": "Celebration Montage Interviewee (as Kelley Robins Hicks)"
    }, {
        "name": "Romy Rosemont",
        "character": "Shawna Lynde"
    }, {
        "name": "James Eckhouse",
        "character": "Senator Boynton"
    }, {
        "name": "Stan Lee",
        "character": "Stan Lee"
    }, {
        "name": "Pat Kiernan",
        "character": "Pat Kiernan"
    }, {
        "name": "Damion Poitier",
        "character": "Man #1"
    }, {
        "name": "Thomas Roberts",
        "character": "Thomas Roberts"
    }, {
        "name": "Ricardo Andres",
        "character": "Lentil Merchant (uncredited)"
    }, {
        "name": "Logan Bennett",
        "character": "SHIELD Agent (uncredited)"
    }, {
        "name": "Mayank Bhatter",
        "character": "Celebration Montage Man Shaving Beard (uncredited)"
    }, {
        "name": "Jeffrey Feingold",
        "character": "Captain Putz (uncredited)"
    }, {
        "name": "Lou Ferrigno",
        "character": "The Hulk (voice) (uncredited)"
    }, {
        "name": "Eric Frank",
        "character": "Stuttgart Citizen (uncredited)"
    }, {
        "name": "Alexander Christopher Jones",
        "character": "Mercenary (uncredited)"
    }, {
        "name": "Annette Lawless",
        "character": "Hostage (uncredited)"
    }, {
        "name": "Kimberly J. Mahoney",
        "character": "Limo Driver (uncredited)"
    }, {
        "name": "Todd Manes",
        "character": "Helicarrier Medical Team Leader (uncredited)"
    }, {
        "name": "Jorge Mardel",
        "character": "Stuttgart Driver (uncredited)"
    }, {
        "name": "Jillian Morgese",
        "character": "Woman in Restaurant (uncredited)"
    }, {
        "name": "Joti Nagra",
        "character": "Waitress (uncredited)"
    }, {
        "name": "Joseph O'Brien",
        "character": "New York City Pedestrian (uncredited)"
    }, {
        "name": "Nate Paige",
        "character": "New York Pedestrian (uncredited)"
    }, {
        "name": "Alexander Daniel Pimentel",
        "character": "Helicarrier shield agent (uncredited)"
    }, {
        "name": "Jaime Powers",
        "character": "SHEILD Agent (uncredited)"
    }, {
        "name": "Robert B. Schneider IV",
        "character": "New York City Police Officer (uncredited)"
    }, {
        "name": "Alonda Shevette",
        "character": "Lab Tech (uncredited)"
    }, {
        "name": "Douglas Slygh",
        "character": "Museum Gala Patron (uncredited)"
    }, {
        "name": "Colin Strause",
        "character": "Shield Agent #4 (uncredited)"
    }, {
        "name": "Robert P. Thitoff",
        "character": "Gala Patron (uncredited)"
    }, {
        "name": "Shane Thompson",
        "character": "Pedestrian (uncredited)"
    }, {
        "name": "Jerry Lee Tucker",
        "character": "Mercenary (uncredited)"
    }, {
        "name": "Tai Urban",
        "character": "Child on news #1 (uncredited)"
    }, {
        "name": "Chris Vaina",
        "character": "Running Pedestrian (uncredited)"
    }, {
        "name": "Sandra Weston",
        "character": "Sweeper (uncredited)"
    }];
    return Avengers;
})

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;
}