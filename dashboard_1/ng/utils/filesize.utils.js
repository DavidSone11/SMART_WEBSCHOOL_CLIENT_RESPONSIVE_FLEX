'use strict';
var formatSizeUnits = function (bytes, callBackBefore, callBackAfter, callBackAfterError) {

    this.bytes = bytes;
    this.callBackBefore = callBackBefore;
    this.callBackAfter = callBackAfterError;
    this.callBackAfterError = callBackAfterError;


    if (!angular.isString(bytes)) {
        this.callBackBefore("CAllBACK BEFORE");
    }

    var convertSizeUnits = function (bytes) {
        if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + ' GB'; }
        else if (bytes >= 1048576) { bytes = (bytes / 1048576).toFixed(2) + ' MB'; }
        else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + ' KB'; }
        else if (bytes > 1) { bytes = bytes + ' bytes'; }
        else if (bytes == 1) { bytes = bytes + ' byte'; }
        else { bytes = '0 byte'; }
        callBackAfter("Results" + bytes);
    };
    convertSizeUnits(bytes);

    function formatBytes(bytes, decimals) {
        if (bytes == 0) return '0 Bytes';
        var k = 1024,
            dm = decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        callBackAfter("Results" + parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]);
    }
    formatBytes(bytes, 3);
    function fromBytes(bytes) {
        if (bytes < 1024) return bytes + " Bytes";
        else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
        else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";
        else
            callBackAfter("Results" + (bytes / 1073741824).toFixed(3) + "GB");
    };
    function formatSizeUnits(bytes) {
        if ((bytes >> 30) & 0x3FF)
            bytes = (bytes >>> 30) + '.' + (bytes & (3 * 0x3FF)) + 'GB';
        else if ((bytes >> 20) & 0x3FF)
            bytes = (bytes >>> 20) + '.' + (bytes & (2 * 0x3FF)) + 'MB';
        else if ((bytes >> 10) & 0x3FF)
            bytes = (bytes >>> 10) + '.' + (bytes & (0x3FF)) + 'KB';
        else if ((bytes >> 1) & 0x3FF)
            bytes = (bytes >>> 1) + 'Bytes';
        else
            bytes = bytes + 'Byte';
        return bytes;
    }
    function formatByte(bytes, decimals) {
        if (bytes == 0) {
            return "0 Byte";
        }
        var k = 1024; //Or 1 kilo = 1000
        var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i];
    }
    function formatBytes(bytes) {
        var kb = 1024;
        var ndx = Math.floor(Math.log(bytes) / Math.log(kb));
        var fileSizeTypes = ["bytes", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"];

        return {
            size: +(bytes / kb / kb).toFixed(2),
            type: fileSizeTypes[ndx]
        };
    }
    function bytesToSize(bytes) {
        var sizes = ['B', 'K', 'M', 'G', 'T', 'P'];
        for (var i = 0; i < sizes.length; i++) {
            if (bytes <= 1024) {
                return bytes + ' ' + sizes[i];
            } else {
                bytes = parseFloat(bytes / 1024).toFixed(2)
            }
        }
        return bytes + ' P';
    }
    getMultiplers = function (bytes) {
        var unit = 1000;
        if (bytes < unit) return bytes;
        var exp = Math.floor(Math.log(bytes) / Math.log(unit));
        var pre = "kMGTPE".charAt(exp - 1);
        var result = bytes / Math.pow(unit, exp);
        if (result / 100 < 1)
            return (Math.round(result * 10) / 10) + pre;
        else
            return Math.round(result) + pre;
    }
    function formatBytes(bytes, decimals, binaryUnits) {
        if (bytes == 0) {
            return '0 Bytes';
        }
        var unitMultiple = (binaryUnits) ? 1024 : 1000;
        var unitNames = (unitMultiple === 1024) ? // 1000 bytes in 1 Kilobyte (KB) or 1024 bytes for the binary version (KiB)
            ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] :
            ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var unitChanges = Math.floor(Math.log(bytes) / Math.log(unitMultiple));
        return parseFloat((bytes / Math.pow(unitMultiple, unitChanges)).toFixed(decimals || 0)) + ' ' + unitNames[unitChanges];
    }

    //     formatBytes(293489203947847, 1);    // 293.5 TB
    // formatBytes(1234, 0);   // 1 KB
    // formatBytes(4534634523453678343456, 2); // 4.53 ZB
    // formatBytes(4534634523453678343456, 2, true));  // 3.84 ZiB
    // formatBytes(4566744, 1);    // 4.6 MB
    // formatBytes(534, 0);    // 534 Bytes
    // formatBytes(273403407, 0);  // 273 MB

    fromBytes(bytes);


}