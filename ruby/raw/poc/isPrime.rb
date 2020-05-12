#puts "hello"
def is_prime(num)
    div=2
    while(div*div<=num)
        if(num%div==0)
            return false
        end

        div=div+1
    end
    return true
end

a=is_prime(20)
puts a
#boolean ko add krne ke lie
puts "no is "+ a.to_s
#class pta krne ke lie
puts a.class


def print_all_prime(num)

        for i in (2..num)
            is_status=is_prime(i)
            if(is_status)
                puts i
            end
        end
    end
            

print_all_prime(10)