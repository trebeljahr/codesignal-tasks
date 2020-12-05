const f = (t) => JSON.stringify(t)
const isSubtree = (t1, t2) => f(t1).indexOf(f(t2)) !== -1
