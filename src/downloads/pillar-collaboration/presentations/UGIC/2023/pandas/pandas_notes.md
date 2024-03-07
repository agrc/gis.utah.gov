pandas notes

.assign: chainable value assignment. 
    Can take either a direct reference to the data 
        `df.assign(new=df['a'] + df['b'])`
    or an indirect reference via a callable (ie, lambda)
        `df.reindex(['a', 'c']).assign(d=lambda x: x['a'] + x['c'])`
    
.at/.iat: scalar getting/setting
.query: alternative to `df[df['a'] > 4]`

Typos/Fixes
for loop diagrm- change last arg to np.sqrt(3)
delete plot slide
