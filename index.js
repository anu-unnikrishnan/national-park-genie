let featuresDiv = document.getElementById('features')

var stateMenu = document.getElementById("change_state");
var parkMenu = document.getElementById("change_park");
var diffMenu = document.getElementById("change_diff");
var typeMenu = document.getElementById("change_type");
var actMenu = document.getElementById("change_activity");
var featMenu = document.getElementById("change_feature");
var accessMenu = document.getElementById("change_access");

//call this function when user clicks inspire me 
function generateTrail(event) {

    let parkDiv = document.getElementById('park')

    //parse the file 
    var trail = JSON.parse(JSON.stringify(nationalparks));
    var counttrails = Object.keys(trail).length; //count number of trails in the JSON file 

    //has it found a trail? 
    valid = 0

    //choose a trail that satisfies the criteria
    possibleTrails = []
    for(let j = 0; j < counttrails; j++){
        if(stateMenu.value == 'Any state' || trail[j].state_name == stateMenu.value){
            if(parkMenu.value == 'Any national park' || trail[j].area_name == parkMenu.value){
                if(diffMenu.value == 'Any difficulty' || (diffMenu.value == 'easy' && (trail[j].difficulty_rating == 1 || trail[j].difficulty_rating == 2)) || (diffMenu.value == 'moderate' && (trail[j].difficulty_rating == 3 || trail[j].difficulty_rating == 4 || trail[j].difficulty_rating == 5)) || (diffMenu.value == 'hard' && (trail[j].difficulty_rating == 6 || trail[j].difficulty_rating == 7))){
                    if(typeMenu.value == 'Any route type' || trail[j].route_type == typeMenu.value){       
                        if(actMenu.value == 'Any activity' || trail[j].activities.includes(actMenu.value)){
                            if(featMenu.value == 'Any feature' || trail[j].features.includes(featMenu.value)){
                                if(accessMenu.value == 'Any accessibility' || trail[j].features.includes(accessMenu.value) || (accessMenu.value == 'dogs-yes' && !trail[j].features.includes('dogs-no'))){      
                                    possibleTrails.push(j)
                                    valid = 1
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //choose a random index of possibleTrails
    choice = Math.floor(Math.random() * possibleTrails.length) 
    //which trail does that correspond to? 
    i = possibleTrails[choice]

    //if a matching trail has been found 
    if(valid == 1){
        //random opener 
        whichopener = Math.floor(Math.random() * 3) + 1 
        if(whichopener == 1)
            opener = "How about the"
        else if(whichopener == 2)
            opener = "What do you think of the"
        else 
            opener = "Why don't you check out the"
        
        //trail[i].length = trail[i].length/1000 //converting length of trail from m to km
        trail[i].length = trail[i].length*0.00062137 //converting length of trail from m to miles
        trail[i].length = trail[i].length.toFixed(1) //only showing 1 decimal place for length 
        trail[i].elevation_gain = trail[i].elevation_gain*3.2808 //converting elevation gain of trail from m to feet
        trail[i].elevation_gain = trail[i].elevation_gain.toFixed(0) //only showing 0 decimal places for elevation gain
        
        //a or an before saying what type of trail 
        if(trail[i].route_type == "out and back")
            word = "an"
        else
            word = "a"
        
        //if there's only 1 review 
        if(trail[i].num_reviews == 0){
            revstring = "It has no reviews yet"
        }
        else if(trail[i].num_reviews == 1){
            revstring = "Its average rating is " + trail[i].avg_rating + " over " + trail[i].num_reviews + " review"
        }
        else{
            revstring = "Its average rating is " + trail[i].avg_rating + " over " + trail[i].num_reviews + " reviews"
        }

        //see what level of difficulty means
        if(trail[i].difficulty_rating == 1 || trail[i].difficulty_rating == 2){
            diffstring = "easy"
        }
        else if(trail[i].difficulty_rating == 3 || trail[i].difficulty_rating == 4 || trail[i].difficulty_rating == 5){
            diffstring = "moderate"
        }
        else{
            diffstring = "hard"
        }

        //see what activities you can do and format as required 
        trailactivities = []
        if(trail[i].activities.includes('backpacking')){
            trailactivities.push(' backpacking')
        }
        if(trail[i].activities.includes('birding')){
            trailactivities.push(' birding')
        }
        if(trail[i].activities.includes('camping')){
            trailactivities.push(' camping')
        }
        if(trail[i].activities.includes('canoeing')){
            trailactivities.push(' canoeing')
        }
        if(trail[i].activities.includes('cross-country-skiing')){
            trailactivities.push(' cross-country skiing')
        }
        if(trail[i].activities.includes('fishing')){
            trailactivities.push(' fishing')
        }
        if(trail[i].activities.includes('fly-fishing')){
            trailactivities.push(' fly fishing')
        }
        if(trail[i].activities.includes('hiking')){
            trailactivities.push(' hiking')
        }
        if(trail[i].activities.includes('horseback-riding')){
            trailactivities.push(' horseback riding')
        }
        if(trail[i].activities.includes('mountain-biking')){
            trailactivities.push(' mountain biking')
        }
        if(trail[i].activities.includes('nature-trips')){
            trailactivities.push(' on nature trips')
        }
        if(trail[i].activities.includes('road-biking')){
            trailactivities.push(' road biking')
        }
        if(trail[i].activities.includes('rock-climbing')){
            trailactivities.push(' rock climbing')
        }
        if(trail[i].activities.includes('sea-kayaking')){
            trailactivities.push(' sea kayaking')
        }
        if(trail[i].activities.includes('snowboarding')){
            trailactivities.push(' snowboarding')
        }
        if(trail[i].activities.includes('snowshoeing')){
            trailactivities.push(' snowshoeing')
        }
        if(trail[i].activities.includes('trail-running')){
            trailactivities.push(' trail running')
        }
        if(trail[i].activities.includes('skiing')){
            trailactivities.push(' skiing')
        }
        if(trail[i].activities.includes('walking')){
            trailactivities.push(' walking')
        }
        if(trail[i].activities.includes('whitewater-kayaking')){
            trailactivities.push(' whitewater kayaking')
        }
        if(trail[i].activities.includes('scenic-driving')){
            trailactivities.push(' on scenic drives')
        }
        if(trail[i].activities.includes('paddle-sports')){
            trailactivities.push(' do paddle sports')
        }

        //see what features the trail has and format as required 
        trailfeatures = []
        if(trail[i].features.includes('lake')){
            trailfeatures.push(' lakes')
        }
        if(trail[i].features.includes('forest')){
            trailfeatures.push(' forests')
        }
        if(trail[i].features.includes('views')){
            trailfeatures.push(' views')
        }
        if(trail[i].features.includes('wildlife')){
            trailfeatures.push(' wildlife')
        }
        if(trail[i].features.includes('wild-flowers')){
            trailfeatures.push(' wildflowers')
        }
        if(trail[i].features.includes('waterfall')){
            trailfeatures.push(' waterfalls')
        }
        if(trail[i].features.includes('river')){
            trailfeatures.push(' rivers')
        }
        if(trail[i].features.includes('beach')){
            trailfeatures.push(' beaches')
        }
        if(trail[i].features.includes('hot-springs')){
            trailfeatures.push(' hot springs')
        }
        if(trail[i].features.includes('cave')){
            trailfeatures.push(' caves')
        }
        if(trail[i].features.includes('historic-site')){
            trailfeatures.push(' historic sites')
        }

        //see what type of trail this is and format as required 
        trailtype = []
        if(trail[i].features.includes('paved')){
            trailtype.push(' is paved')
        }
        if(trail[i].features.includes('partially-paved')){
            trailtype.push(' is partially paved')
        }
        if(trail[i].features.includes('rails-trails')){
            trailtype.push(' is a rail trail')
        }
        if(trail[i].features.includes('city-walk')){
            trailtype.push(' is a city walk')
        }
        if(trail[i].features.includes('kids')){
            trailtype.push(' is suitable for kids')
        }
        if(trail[i].features.includes('strollers')){
            trailtype.push(' allows strollers')
        }
        if(trail[i].features.includes('ada')){
            trailtype.push(' is ADA-accessible')
        }
        if(trail[i].features.includes('dogs-no')){
            trailtype.push(' does not allow dogs')
        }
        if(trail[i].features.includes('dogs-leash')){
            trailtype.push(' allows dogs on a leash')
        }
        if(!trail[i].features.includes('dogs-no') && !trail[i].features.includes('dogs-leash')){
            trailtype.push(' allows dogs')
        }

        //output the info! 
        parkDiv.innerHTML = `<center><p style="font-size: 18px">${opener} ${trail[i].name.italics()} <br> in ${trail[i].area_name.italics()}, in ${trail[i].city_name}, ${trail[i].state_name}? </font size> <font size = "-1"> <br> <br>This trail is ${trail[i].length} miles long with an elevation gain of ${trail[i].elevation_gain}ft. <br> It has a difficulty level of ${trail[i].difficulty_rating} (${diffstring}), and is ${word} ${trail[i].route_type} trail. <br> ${revstring}. <br><br>On this trail, you'll get to see${trailfeatures}. <br>You can go${trailactivities}. <font size = "-1"><br>(This trail ${trailtype}) </p></center>`
    }

    //if a matching trail hasn't been found
    else{
        parkDiv.innerHTML = `<center><p> <font size = "+0"><br>Hmmm, there's nothing that matches your criteria.</p></center>`
    }
}
