let value = prompt("Enter the positive elements of array or enter -1 to exit.")
        var array = []
        while(value != -1){
            if(value > 0){
            array.push(value)
            }
            value = prompt("Enter next value or -1 to exit")
        }
        let odd = array.filter(el=>el%2!=0)
        console.log(odd)
        let cube = array.filter(el=>el%2!=0).map(el=>el**3);
        console.log(cube)
