// drawMap();


function drawMap() {
    var e = document.getElementById('mapBox');
    e.innerHTML = '\
    <!DOCTYPE html>\
    <html xmlns="http://www.w3.org/1999/xhtml">\
    <head>\
        <meta http - equiv="Content-Type" content = "text/html; charset=utf-8" />\
            <title>地图</title>\
            <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=S49mhx8MwhakM1uWKRI7KNZ4OUqpSIut"></script>\
    </head >\
        <body style="margin:0;padding:0">\
            <div style="width:344px;height:492px;border:#ccc solid 0px;font-size:12px" id="map"></div>\
        </body>\
        <script type="text/javascript">\
        function initMap() {\
            createMap();\
            setMapEvent();\
            addMapControl();\
            addMapOverlay();\
        }\
        function createMap() {\
                map = new BMap.Map("map");\
            map.centerAndZoom(new BMap.Point(116.290549, 40.16658), 15);\
        }\
        function setMapEvent() {\
                map.enableScrollWheelZoom();\
            map.enableKeyboard();\
            map.enableDragging();\
            map.enableDoubleClickZoom()\
        }\
        function addClickHandler(target, window) {\
                target.addEventListener("click", function () {\
                    target.openInfoWindow(window);\
                });\
            }\
        function addMapOverlay() {\
            var markers = [\
            ];\
            for (var index = 0; index < markers.length; index++) {\
                var point = new BMap.Point(markers[index].position.lng, markers[index].position.lat);\
                var marker = new BMap.Marker(point, {\
                icon: new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png", new BMap.Size(20, 25), {\
                imageOffset: new BMap.Size(markers[index].imageOffset.width, markers[index].imageOffset.height)\
        })\
    });\
                var label = new BMap.Label(markers[index].title, {offset: new BMap.Size(25, 5) });\
                var opts = {\
                width: 200,\
            title: markers[index].title,\
            enableMessage: false\
        };\
        var infoWindow = new BMap.InfoWindow(markers[index].content, opts);\
        marker.setLabel(label);\
        addClickHandler(marker, infoWindow);\
        map.addOverlay(marker);\
    };\
}\
        function addMapControl() {\
            var scaleControl = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT });\
            scaleControl.setUnit(BMAP_UNIT_IMPERIAL);\
            map.addControl(scaleControl);\
            var navControl = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: 0 });\
            map.addControl(navControl);\
            var overviewControl = new BMap.OverviewMapControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: false });\
            map.addControl(overviewControl);\
        }\
        var map;\
        initMap();\
    </script>\
    </html >\
    '
}