// IE compatible function for getting parameter values
const getParam = (url, searchFor) => {
    // first split the url at ? to get params
    const paramString = url.split('?')[1];
    if (!paramString) {
        return false;
    }
    // then split again at the & symbol in case there are other params
    const paramArray = paramString.split('&');
    // loop through the different params and return the value if the key=searchFor
    // else if the param doesn't contain an = (has no value, but exists), return true
    for (let i = 0; i < paramArray.length; i++) {
        const param = paramArray[i];
        if (param.indexOf('=') > -1 ) {
            const paramKey = param.split('=')[0];
            if (paramKey === searchFor) {
                return param.split('=')[1];
            }
        }
        else if (param === searchFor) {
            return true;
        }
    }
    // for all other unforeseen instances return false
    return false;
};
