basket
    .require({ url: 'lib.min.js' })
    .then(function () {
        // Success
        console.log('Lib Loaded');
        basket.require({ url: 'game.js?v=6' });
    }, function (error) {
        // There was an error fetching the script
        console.log(error);
    });