let input = prompt("Please enter the a phrase to translate in whale language");
const vowels = ['a', 'e', 'i', 'o', 'u']; //except y
let resutlArray = [];
let outputString = '';

//loop that iterates through the input string, exrtacts each vowel and stores it into resultArray
//  letters e and u should be doubled
 /***********************************************************************
 *   for(i=0; i<input.length; i++){                                     *
 *       if(vowels.includes(input.charAt(i))){                          *
 *          if(input.charAt(i) === 'e' || input.charAt(i) === 'u'){     *
 *               resutlArray.push(input.charAt(i));                     *
 *          }                                                           *
 *           resutlArray.push(input.charAt(i));                         *
 *       }                                                              *
 *   }                                                                  *
 ***********************************************************************/

//the above solution implemented using nested loops
for(i=0; i<input.length; i++){
    for(j=0; j<vowels.length; j++){
        if(input.charAt(i)===vowels[j]){
            resutlArray.push(input.charAt(i));     
        }
    }                 
    if(input.charAt(i) === 'e' || input.charAt(i) === 'u'){     
        resutlArray.push(input.charAt(i));       
    }           
}
//join the array into a single string
outputString = resutlArray.join('');
//capitalise the output and and pring on the screen 
document.getElementById('output').innerHTML = 'Output: ' + outputString.toUpperCase();


//reload page
document.getElementById("myButton").addEventListener("click", function(){
    location.reload();
});
