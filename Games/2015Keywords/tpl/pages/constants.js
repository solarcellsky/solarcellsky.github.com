define(function() {
    return {
        EFFECT_TYPE: {
            '1': 'eraser',
            '2': 'dropout',
            '3': 'finger',
            '4': 'gravity'
        },
        YUNYING_PAGE: {
            DEFAULT_LOGO: 'http://' + window.location.host + '/res/images/logo.jpg',
            DEFAULT_NAME: '新场景应用',
            BUTTON: '我也要',
            DEFAULT_ICON: '',
            COVER_IMAGE: '/tpl/img/yunying-cover.png'
        },
        BACKGROUND_TYPE: {
            NULL: 0,
            COLOR: 1,
            IMAGE: 2,
            ALL: 3
        },
        AJAX_ECODE: {
            SUCCESS: 0,
            AUTH_ERROR: 4003,
            APPID_ERROR: 4004,
            WX_ERROR: 6009
        }
    }
});