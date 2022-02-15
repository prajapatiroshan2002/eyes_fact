let btn = document.getElementById('btn');
let output = document.getElementById('output');
let facts = [
    "In a very basic form, eyes are thought to have first developed in animals around 550 million years ago!", 
"You actually see with your brain, not your eyes. Our eyes function like a camera, capturing light and sending data back to the brain.",
"You see things upside down - it is your brain which turns the image the right way up.", 
"In a single second, it’s possible to blink five times.",
"You are likely to blink more often when you are talking.",
"The eye is the fastest muscle in your body – hence why when something happens quickly, we say ‘in the blink of an eye!’ ",
"A blink typically lasts 100-150 milliseconds. ",
"The human eye can function at 100% at any given moment, without needing to rest.",
"Red-eye in photos is caused by light from the flash bouncing off the capillaries in your eyes.",
"If the human eye was a digital camera, it would have 576 megapixels.",
"On average, you will blink approximately 4,200,000 times in a single year. ",
"We have two eyeballs in order to give us depth perception – comparing two images allows us to determine how far away an object is from us.", 
"Eyes heal quickly. With proper care, it takes only about 48 hours to repair a minor corneal scratch.",
"The world’s most common eye colour is brown.", 
"The first blue-eyed person is said to have lived 6,000-10,000 years ago. ",
"Even if no one in the past few generations of your family had blue or green eyes, these recessive traits can still appear in later generations.",
"Blue-eyed people share a common ancestor with every other blue-eyed person in the world.", 
"During a sight test, health conditions including diabetes and high blood pressure can be detected.",
"Diabetes is the number one cause of blindness in adults in the UK. ",
"Research has found that a tie tied too tightly can increase the risk of glaucoma in men.",
"In the right conditions and lighting, humans can see the light of a candle from 14 miles away. ",
"Heterochromia refers to a condition where eyes are two different colours. ",
"Contrary to urban myth, contact lenses cannot become ‘lost’ behind your eye due to the structure of your eyeball. ",
"Your eyes start to develop just two weeks after conception. ",
"Although our nose and ears keep growing throughout our lives, our eyes remain the same size from birth. ",
"All babies are colour blind at birth.", 
"Colour blindness is more common in males. ",
"A newborn baby will cry, but not produce any tears. Babies do not produce tears until they are around six weeks old.", 
"Newborn babies can see objects about 8-15 inches away most clearly.",
"The older we get, the less tears we produce. ",
"Blind people can see their dreams as long as they weren’t born blind.",
"80% of our memories are determined by what we see.", 
"The only cells that survive from the time you are born until death are in your eyes.",
"Eyelashes have an average lifespan of five months.", 
"If you lined up all the eyelashes shed during one human life, they would measure 98 feet long.", 
"Your eyelashes keep dirt out of your eyes. ",
"We have all have unseen, harmless microscopic creatures living in our eyelashes.", 
"Your eyebrows prevent sweat dripping into your eyes.", 

];
btn.addEventListener('click',function(){
    var randomfacts = facts[Math.floor(Math.random() * facts.length)]
    output.innerHTML = randomfacts;
})