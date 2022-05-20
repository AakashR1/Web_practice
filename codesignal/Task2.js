//Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
function solution(year) {
    if (year <= 100)
       return 1
 
    else if (year % 100 == 0)
        return parseInt(year / 100)
 
    else
        return parseInt((year / 100)+1);

}
