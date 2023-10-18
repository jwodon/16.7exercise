//Q1

{1,2,3,4}

//Q2

"ref"

//Q3

// Map(2)  {Array(3) => true, Array(3) => false}

//hasDuplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount

function vowelCount(str){
    const vowelMap = new Map();
    const vowels = 'aeiou'
    for (let letter of str){
        lowerLetter = letter.toLowerCase()
        if(vowels.includes(lowerLetter)){
            if(vowelMap.has(lowerLetter)){
                vowelMap.set(lowerLetter, vowelMap.get(lowerLetter) + 1);
            } else {
                vowelMap.set(lowerLetter, 1)
            }
        }
    }
    return vowelMap;
}