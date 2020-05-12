m=gets.chomp.to_i;
n=gets.chomp.to_i;

arr=[]
for i in(0..m-1)
    row=[]
    for j in (0..n-1)
        val=gets.chomp.to_i
        row.push(val)
    end
    arr.push(row)
end

puts  "*******"

def spiral_display(arr)
        rowmin = 0;
        colmin = 0;
        rowmax = arr.length - 1;
        colmax = arr[0].length - 1;
        r=arr.length;
        c=arr[0].length;
        count = 0;
        while(count < r*c) 
            for i in (rowmin..rowmax) 
                puts arr[i][colmin]
                count=count+1
            end
        

            colmin=colmin+1;
            for j in (colmin..colmax)
            #for (int j = colmin; j <=colmax&&count<r*c; j++) {
                if(count<r*c)
                 puts arr[rowmax][j];
                 count=count+1
                end
               
            end
            
            rowmax=rowmax-1;
            for i in rowmax.downto(rowmin)
            
                if(count<r*c)
                   puts arr[i][colmax];
                   count=count+1
                 end
                 
            end

            colmax=colmax-1;
            for j in (colmax).downto(colmin)
            #for (int j = colmax; j >= colmin&&count<r*c; j--) {
                if(count<r*c)
                    puts arr[rowmin][j];
                    count=count+1
                end
                
            end
            rowmin=rowmin+1;  
       end
end



spiral_display(arr);