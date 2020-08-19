//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let managerDetails = [managerName, managerAge, currentTeam, trophiesWon];
  return managerDetails;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}
function createFormation(formationArray) {
  if (formationArray == "") {
    return null;
  }
  let formationDetails = {
    'defender': formationArray[0],
    'midfield': formationArray[1],
    'forward': formationArray[2]
  }
  return formationDetails;
}
//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function filterByDebut(year) {
  var pl = [];
  let c = 0;
  for (let i of players) {
    if (i.debut == year) {
      pl[c++] = i;
    }
  }
  return pl;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByPosition(pos) {
  var pl = [];
  let c = 0;
  for (let i of players) {
    if (i.position == pos) {
      pl[c++] = i;
    }
  }
  return pl;
}
//Progression 4 - Filter players that play at the position _______
function filterByAward(awardName) {
  var pl = [];
  let k = 0;
  for (let i of players) {
    for (let j = 0; j < i.awards.length; j++) {
      if (i.awards[j].name == awardName) {
        pl[k++] = i;
        break;
      }
    }
  }
  return pl;
}
//Progression 5 - Filter players that have won ______ award
function filterByAwardxTimes(awardName, noOfTimes) {
  var pl = [];
  let k = 0;
  let count = 0;
  for (let i of players) {
    count = 0;
    for (let j = 0; j < i.awards.length; j++) {
      if (i.awards[j].name == awardName) {
        count++;
      }
    }
    if (noOfTimes == count) {
      pl[k++] = i;
    }
  }
  return pl;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxCountry(awardName, cntry) {
  var pl = [];
  let k = 0;
  for (let i of players) {
    for (let j = 0; j < i.awards.length; j++) {
      if (i.awards[j].name == awardName && i.country == cntry) {
        pl[k++] = i;
        break;
      }
    }
  }
  return pl;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var pl = [];
  let k = 0;
  for (let i of players) {
    if (i.awards.length >= noOfAwards && i.team == team && i.age < age) {
      pl[k++] = i;
    }
  }
  return pl;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function SortByAge() {
  var pl = [];
  pl = Object.age(players).sort()
  return pl.reverse();
}

//Progression 9 - Sort players in descending order of their age
function FilterByTeamxSortByNoOfAwards(team) {
  var playerList = [];
  let c = 0;
  for (let i of players) {
    if (i.team == team) {
      playerList[c++] = i;
    }
  }
  playersList = playerList.awards.length.sort();
  return playersList;
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var pl = [];
  let k = 0;
  let count = 0;
  for (let i of players) {
    count = 0;
    for (let j = 0; j < i.awards.length; j++) {
      if (i.awards[j].name == awardName) {
        count++;
      }
    }
    if (noOfTimes == count && i.country == country) {
      pl[c++] = i;
    }
  }
  return pl.name.sort();
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexOlderThan(age) {
  var pl = [];
  let k = 0;
  for (let i of players) {
    if (i.age >= age) {
      i.awards.name.sort().reverse();
      pl[c++] = i;
    }
  }

  return pl.age.sort();
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
