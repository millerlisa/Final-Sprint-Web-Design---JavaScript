// Read the JSON file using FETCH API
fetch('./athlete.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        html = "<center>Web Design - JavaScript Final Sprint</center>";
        html += "<br>"
        html += "<center>JSON, Looping, Functions, & Disk Files</center>";
        // Loop through the array of objects in athlete.json
        data.forEach(athlete => {
            html += `<p>${getTopAthletes(athlete)}</p>`;
            console.log(getTopAthletes(athlete));
            console.log(getPoints(athlete));
            html += `<p>${getPoints(athlete)}</p>`;
            console.log(beLike(athlete));
            html += `<p>${beLike(athlete)}</p>`;
            html += '<hr>';
            console.log('-------------------');
        });
        
        document.body.innerHTML = html;
    })
    .catch(error => {
        console.error(error);
    });
    
function getTopAthletes(athlete) {
    return `${athlete.athleteFName} ${athlete.athleteLName}, originating from ${athlete.country}, is ranked the world's number ${athlete.rank} ${athlete.division}'s CrossFit athlete!`;
}

function getPoints(athlete) {
    return `${athlete.athleteLName} earned ${athlete.totalPoints} points to claim a top spot!`;
}

function beLike(athlete) {
    return `Wanna get fit? Work out like ${athlete.athleteFName}!`;
}