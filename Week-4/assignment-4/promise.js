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
delayedResultPromise(4, 5, 3000)
    .then(console.log);
   // 9 (4+5) will be shown in the console after 3 seconds
