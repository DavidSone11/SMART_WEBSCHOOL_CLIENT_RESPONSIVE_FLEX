'use strict';
var formatSizeUnits = function (nSize, callBackBefore, callBackAfter, callBackAfterError) {

    this.nSize = nSize;
    this.callBackBefore = callBackBefore;
    this.callBackAfter = callBackAfterError;


    if (angular.isString(nSize)) {
        this.callBackBefore("CAllBACK BEFORE");
    }


}