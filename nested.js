const college={
    name:'ISC',
    class:['11',[12]],
    events:['science fair','21 feb'],
    unique:{
        color:'blue',
        result:{
            gpa:5,
            merit:3,
        }
    }
}

college.unique.result.merit=5;
console.log(college);