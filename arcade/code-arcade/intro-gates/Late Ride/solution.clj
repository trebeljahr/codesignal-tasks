(defn myDiv [a b] (int (Math/floor (/ a b))))
(defn sumDigits [a] (+ (myDiv a 10) (mod a 10)))

(defn lateRide [n] (
    let [a (myDiv n 60) b (- n (* a 60))]
    (+ (sumDigits a) (sumDigits b))
))

