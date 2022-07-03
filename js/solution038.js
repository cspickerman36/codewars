// Define a card suit: You get any card as an argument. Your task is to return the suit of this card (in lowercase).

function defineSuit(card) {
    let cheese = card.replace(/\d+/g, ' ')
    
    let hasClub = cheese.indexOf('♣')
      if (hasClub == true){
        return 'clubs'
    }
     let hasDia =  cheese.indexOf('♦')
      if (hasDia == true){
        return 'diamonds'
    }
    let hasHeart = cheese.indexOf('♥')
      if (hasHeart == true){
        return 'hearts'
    }
     let hasSpade = cheese.indexOf('♠')
      if (hasSpade == true){
        return 'spades'
    }
  }
