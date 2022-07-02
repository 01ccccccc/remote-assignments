async function main() {
    // your code here, you should call delayedResultPromise here and get the result using async/await.
    function delayedResultPromise(n1, n2, delayTime) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                if (Number.isInteger(n1) && Number.isInteger(n2)) {
                    resolve(n1 + n2);
                } else {
                    reject( Error('Your should input two integers.'));
                }
            }, delayTime)
        });
       }

    const output = await delayedResultPromise(4, 5, 3000)
    console.log(output);
}
main(); // result will be shown in the console after <delayTime> seconds
