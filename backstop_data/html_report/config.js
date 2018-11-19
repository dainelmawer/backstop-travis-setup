report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20181119-083850/backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "file:///Users/dainemawer/Desktop/backstop-travis-setup/index.html",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -84
          },
          "misMatchPercentage": "15.88",
          "analysisTime": 102
        },
        "diffImage": "../bitmaps_test/20181119-083850/failed_diff_backstop_default_BackstopJS_Homepage_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "test": "../bitmaps_test/20181119-083850/backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "file:///Users/dainemawer/Desktop/backstop-travis-setup/index.html",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "9.75",
          "analysisTime": 110
        },
        "diffImage": "../bitmaps_test/20181119-083850/failed_diff_backstop_default_BackstopJS_Homepage_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_2_desktop.png",
        "test": "../bitmaps_test/20181119-083850/backstop_default_BackstopJS_Homepage_0_document_2_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_2_desktop.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "file:///Users/dainemawer/Desktop/backstop-travis-setup/index.html",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "4.79",
          "analysisTime": 131
        },
        "diffImage": "../bitmaps_test/20181119-083850/failed_diff_backstop_default_BackstopJS_Homepage_0_document_2_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});