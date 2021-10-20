//Ask user for input
let wordInput =prompt("Please enter a word");

//Input word converted to upperCase to make program easier to use. Using upper case i make sure that data stay between 65-90.
wordInput=wordInput.toUpperCase();

//Delcare array to store data inside
let uniNumArr=[];
let AlphArr=[];

function getUnicodeString(str){
    
    //Use for loop to run through all strings that was put in by user
    for (i=0;i<str.length;i++){
        let str1=str.charCodeAt(i);//Get Unicode for each string

        if (str1<65 || str1>90){//If we got char outside the capital letter range of 65-90 keep char as is 
            let addNumArray=uniNumArr.push(str1);
        }

        else{//If char is within 65-90 range run follow value
        
            if (str1>=75){//If str1 value is more that 75 need to some calculations for new unicode for the array
            str1=(str1+15)-26;//Did this calculation that if user went over 90 units will -26 to begin at 65 again that is A
            let addNumArray=uniNumArr.push(str1);// Get the unicode number of all the strings that was entered and store in array
            }

            else{//If value is under 75 just add 15 to each char to get 12 char after your char that you have entered
            str1=str1+15;
            let addNumArray=uniNumArr.push(str1);//Store each unicode inside a array
            }
        
    }
}
    console.log(uniNumArr);//Print out the uniNumArr
}
getUnicodeString(wordInput);//Call function


//Function to convert all the unicode that was stored inside the array to the roman aplphabet

function unicodeToAplhabet(str){
    for(j=0;j<str.length;j++){
        let aplh=String.fromCharCode(str[j]);//Convert all the unicode numbers to aplhabet
        let addAplhArray=AlphArr.push(aplh);//Press all this data to array what we can show user later on.
    }
    console.log(AlphArr);//Print out the new array after conversion
}

unicodeToAplhabet(uniNumArr);//Call function

