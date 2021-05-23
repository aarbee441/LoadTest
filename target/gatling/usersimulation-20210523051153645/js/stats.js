var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "97",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "2087",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "4753",
        "ok": "4753",
        "ko": "100"
    },
    "meanResponseTime": {
        "total": "3649",
        "ok": "3759",
        "ko": "93"
    },
    "standardDeviation": {
        "total": "900",
        "ok": "657",
        "ko": "6"
    },
    "percentiles1": {
        "total": "3935",
        "ok": "3939",
        "ko": "94"
    },
    "percentiles2": {
        "total": "4118",
        "ok": "4145",
        "ko": "97"
    },
    "percentiles3": {
        "total": "4312",
        "ok": "4312",
        "ko": "99"
    },
    "percentiles4": {
        "total": "4555",
        "ok": "4561",
        "ko": "100"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 97,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.877",
        "ok": "0.851",
        "ko": "0.026"
    }
},
contents: {
"req_get--search-q---8f7d0": {
        type: "REQUEST",
        name: "GET /search?q=/shoes",
path: "GET /search?q=/shoes",
pathFormatted: "req_get--search-q---8f7d0",
stats: {
    "name": "GET /search?q=/shoes",
    "numberOfRequests": {
        "total": "100",
        "ok": "97",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "2087",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "4753",
        "ok": "4753",
        "ko": "100"
    },
    "meanResponseTime": {
        "total": "3649",
        "ok": "3759",
        "ko": "93"
    },
    "standardDeviation": {
        "total": "900",
        "ok": "657",
        "ko": "6"
    },
    "percentiles1": {
        "total": "3935",
        "ok": "3939",
        "ko": "94"
    },
    "percentiles2": {
        "total": "4118",
        "ok": "4145",
        "ko": "97"
    },
    "percentiles3": {
        "total": "4312",
        "ok": "4312",
        "ko": "99"
    },
    "percentiles4": {
        "total": "4555",
        "ok": "4561",
        "ko": "100"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 97,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.877",
        "ok": "0.851",
        "ko": "0.026"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
