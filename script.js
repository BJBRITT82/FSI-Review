let animals = document.querySelectorAll('.animal')
console.log(animals)
//create dog vote button
let dogVoteBtn=document.createElement('button')
dogVoteBtn.textContent='Vote for Doggo'
animals[0].append(dogVoteBtn)

//create cat vote button
let catVoteButton=document.createElement('button')
catVoteButton.textContent='Vote for Catto'
animals[1].append(catVoteButton)

//create fish vote button
let fishVoteButton=document.createElement('button')
fishVoteButton.textContent='Vote for Fish Gold'
animals[2].append(fishVoteButton)

//isolate the vote count for the dog in the voting table
let dogVotesCell = document.querySelector("#doggo-votes");

//this is the dog button that we created and appended previously
// let dogVoteBtn = document.createElement("button")
// dogVoteBtn.textContent = "Vote for Doggo"

//Now, we're adding this event listener
dogVoteBtn.addEventListener('click', function(e) {
    let dogVotesCount = parseInt(dogVotesCell.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;
    localStorage.setItem('dog-votes', dogVotesCount);
    
});

let dogVotes = localStorage.getItem('dog-votes')
    if (dogVotes) {
        dogVotesCell.textContent = dogVotes;
}

//cat vote table
let catVotesCell =document.querySelector('#catto-votes')

//add cat event listener
catVoteButton.addEventListener('click', function(e){
    let catVoteCount=parseInt(catVotesCell.textContent);
    catVoteCount ++;
    catVotesCell.textContent=catVoteCount;
    localStorage.setItem('cat-votes', catVoteCount);
})
let catVotes=localStorage.getItem('cat-votes')
    if(catVotes) {
        catVotesCell.textContent=catVotes;
    }

//fish vote table
let fishVotesCell=document.querySelector('#fish-votes')

//add fish event listener
fishVoteButton.addEventListener('click', function(e){
    let fishVoteCount=parseInt(fishVotesCell.textContent);
    fishVoteCount++;
    fishVotesCell.textContent=fishVoteCount;
    localStorage.setItem('fish-votes', fishVoteCount)
})
let fishVotes=localStorage.getItem('fish-votes')
    if(fishVotes){
        fishVotesCell.textContent=fishVotes;
    }