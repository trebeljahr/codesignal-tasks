function findSubstrings(words: string[], parts: string[]): string[] {
    interface Node {
        [key:string]: number | string;
    }
    var trie:Node[] = [{}];
    for(var part of parts) {
        var pos = 0;
        for(var ch of part) {
            var next = trie[pos][ch];
            if(!next) {
                next = trie.push({}) - 1;
                trie[pos][ch] = next;
            }
            pos = next as number;
        }
        trie[pos].end = part;
    }
    console.log(trie)
    
    return words.map(
        word => {
            var states = [];
            for(var i=0, x=0, y=0; i<word.length; ++i) {
                var ch = word[i];

                states.push(0);
                states = states.map( 
                    state => trie[state][ch] 
                ).filter(
                    state => state
                );

                for( var e of states.map( state => trie[state].end ) ) { 
                    const end = e as string
                    if( end && (!y || y-x<end.length) ) {
                        x = i-end.length+1;
                        y = i+1;
                    }
                }
            }
            return !y ? word :
                word.slice(0, x) + "[" + 
                word.slice(x, y) + "]" +
                word.slice(y);
            
        }
    );

}
