(defn calcNextDeposit [deposit rate] 
    (+ deposit (* deposit (/ rate 100)))
)

(defn counter [deposit rate threshold total]  
    (if (>= deposit threshold) total (counter (calcNextDeposit deposit rate) rate threshold (+ total 1)))
) 

(defn depositProfit [deposit rate threshold] (counter deposit rate threshold 0))

