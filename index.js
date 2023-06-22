// code your solution here
const superBowlArray = [
    {
        year: 1993,
        result: "L"
    },
    {
        year: 1998,
        result: "L"
    },
    {
        year: 2015,
        result: "W"
    },
    {
        year: 1973,
        result: "L"
    },
    {
        year: 1956,
        result: "L"
    },
    {
        year: 2011,
        result: "L"
    }
]
superBowlArray.find(superbowlWin)

function superbowlWin(element) {
    if(element.result === "W") {
        console.log(element.year)
        return element.year.toString()
    } 
    return undefined
}