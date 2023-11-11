const doSomething = new Promise((resolve) => {
    const man = Math.floor(Math.random()*100)
    resolve(man);
});

const doSomethingElse = (a) => {
     const man = a
     const woman = Math.floor(Math.random()*100)
     const average = (man + woman)/2;
     const result = {man : a, woman: woman , average : average}
     return result
}

const doThirdThing = (a) => {
     switch (true) {
        case(a.average >= 70):
            return (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a.average} You are compatible `)
            case(a.average >= 60):
            return (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a.average} You are slighly compatible`)
            case(a.average >= 50):
            return (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a.average} manageable `)
            case(a.average >= 40):
            return (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a.average} don't marry`)
            default: return (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a.average} run for your life`)
     }
}
function failureCallback (error){
        console.error(`This error happened: $[error]`);
}

doSomething.then((result) => doSomethingElse(result))
.then((newResult) => doThirdThing(newResult))
.then((finalResult) => {
     console.log(`This is our verdict ${finalResult}`);
})
.catch(failureCallback)