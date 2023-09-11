var peopleButton = document.getElementById("people")
var resourcesButton = document.getElementById("resources")
var consumptionButton = document.getElementById("consumption")
var climateButton = document.getElementById("climate")

var h4change = document.getElementById("save")





peopleButton.addEventListener('click', function handleClick() {
    document.getElementById('frame').src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.body.style.backgroundImage= "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png)"
    document.getElementById('save').textContent = "";

        climateButton.style.backgroundColor="transparent"
        consumptionButton.style.backgroundColor="transparent"
        resourcesButton.style.backgroundColor="transparent"
        peopleButton.style.backgroundColor="red"

        h4change.textContent = ' Do your bit! Never waste  food.Rather offer it to people or animals who are in need.'
    

});



resourcesButton.addEventListener('click', function handleClick() {
    document.getElementById('frame').src = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.body.style.backgroundImage= "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png)"
    document.getElementById('save').textContent = "";

        climateButton.style.backgroundColor="transparent"
        consumptionButton.style.backgroundColor="transparent"
        resourcesButton.style.backgroundColor="orange"
        peopleButton.style.backgroundColor="transparent"

        h4change.textContent = 'Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle.'
    

});

consumptionButton.addEventListener('click', function handleClick() {
    document.getElementById('frame').src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.body.style.backgroundImage= "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png)"
    document.getElementById('save').textContent = "";
    
    
        climateButton.style.backgroundColor="transparent"
        consumptionButton.style.backgroundColor="green"
        resourcesButton.style.backgroundColor="transparent"
        peopleButton.style.backgroundColor="transparent"

        
        h4change.textContent = 'Do your bit! Shop only what you need,eat only what you need and always save the left overs.'
    
});

climateButton.addEventListener('click', function handleClick() {
    document.getElementById('frame').src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.body.style.backgroundImage= "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png)"
    document.getElementById('save').textContent = "";  


        climateButton.style.backgroundColor="blue"
        consumptionButton.style.backgroundColor="transparent"
        resourcesButton.style.backgroundColor="transparent"
        peopleButton.style.backgroundColor="transparent"

    

        h4change.textContent = 'Do your bit! Save trees, use renewable energy soureces and prefer to travel green.'
    
        
});