var tokenTree = function (tokenArray) {
    var characterArray = 'A,B,C,D,E,F,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(',');
    var createLetterObject = function (l) {
        var pChildren = [];

        var getMatchingWords = function (characterArr, availableWords, children) {
            if (characterArr.length === 0) {
                for (var child in children) {
                    if ({}.hasOwnProperty.call(children, child)) {
                        var currentChild = children[child];

                        var words = currentChild.getWords(characterArr);

                        for (var pos in words) {
                            if ({}.hasOwnProperty.call(words, pos)) {
                                availableWords.push(words[pos]);
                            }
                        }

                        if (currentChild.word) {
                            availableWords.push(currentChild.word);
                        }
                    }
                }
            } else {
                var currentCharacter = characterArray.pop();
                getMatchingWords(characterArr, availableWords, children[currentCharacter].children);
            }
        };

        function doGetWords(wordPart) {
            var len = wordPart.length;
            var ar = [];
            var wordList = [];

            for (var ii = len - 1; ii >= 0; ii --) {
                ar.push(wordPart[ii].toUpperCase());
            }

            getMatchingWords(ar, wordList, pChildren);

            return wordList;
        }

        return {
            letter: l,
            children: pChildren,
            parent: null,
            word: null,
            getWords: doGetWords
        };
    };

    var startingPoint = createLetterObject();

    function parseWord(wordCharacterArray, parent, fullWord) {
        if (wordCharacterArray.length === 0) {
            parent.word = fullWord;
            return;
        }

        var currentCharacter = wordCharacterArray.pop().toUpperCase();

        if (!parent.children[currentCharacter]) {
            parent.children[currentCharacter] = createLetterObject(currentCharacter);
        }

        parseWord(wordCharacterArray, parent.children[currentCharacter], fullWord);
    }

    for (var counter in tokenArray) {
        if ({}.hasOwnProperty.call(tokenArray, counter)) {
            var word = tokenArray[counter];

            var ar = [];

            var wordLength = word.length;

            for (var ii = wordLength - 1; ii >= 0; ii--) {
                ar.push(word[ii]);
            }

            parseWord(ar, startingPoint, word);
        }
    }

    return startingPoint;
};
