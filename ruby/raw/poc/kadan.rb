a=[8,-8,9,-9,10,-11,12]

def kadans(arr)
    max=0
    tempmax=0
    for i in(0..arr.length-1)
        tempmax=tempmax+arr[i]
        if(max<tempmax)
            max=tempmax
        end
    end
    return max
end

puts kadans(a)

