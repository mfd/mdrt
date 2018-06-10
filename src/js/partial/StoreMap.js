export default class StoreMap {
  constructor() {
    console.log('init >> Map', $('#map').length);
    setTimeout(() => {
      this.controller = undefined;
      //this.$container = options.$container;

      var mapOptions =  (typeof(options.mapOptions) !== 'undefined') ? options.mapOptions : {};
      var controllerReadyCallback = (typeof(options.controllerReadyCallback) !== 'undefined') ? options.controllerReadyCallback : function() {};

      // this.$container.on('controllerReady.Map', () => {
      //   controllerReadyCallback(this);
      // });

      // If google is undefined
      if (!window.google || !window.google.maps) {
        window._tmp_google_onload = () => {
          this.displayMap(mapOptions);
        };

        $.getScript(
          'https://maps.googleapis.com/maps/api/js?sensor=true&v=3' +
          '&language=fr&callback=_tmp_google_onload&key=AIzaSyC30nnqC_nxh8v5p4jQpZEE2KyZUhl2NLU',
          function() {}
        );

        return false;
      } else {
        this.displayMap(mapOptions);
      }
    }, 1700);
    //this.createMap();
  }
  displayMap() {
    //const styleMap = [{'featureType':'landscape','elementType':'geometry','stylers':[{'visibility':'on'},{'color':'#e4eff5'}]},{'featureType':'water','stylers':[{'saturation':-83},{'lightness':79},{'color':'#b1c3d0'},{'gamma':0.76}]},{'featureType':'poi','stylers':[{'color':'#c7dbe5'}]},{'featureType':'poi','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'road','elementType':'labels','stylers':[{'gamma':1},{'visibility':'off'}]},{'featureType':'road.highway','stylers':[{'visibility':'on'},{'color':'#a0c2d4'},{'gamma':2.78}]},{'featureType':'road.highway','elementType':'labels','stylers':[{'visibility':'off'}]},{},{'featureType':'road','stylers':[{'color':'#d7e4ec'},{'gamma':1.39},{'lightness':-3}]},{'featureType':'transit','stylers':[{'visibility':'off'}]}];
    const styleMap = [{'featureType':'administrative','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#fcfcfc'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#fcfcfc'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#eeeeee'}]},{'featureType':'water','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]}];
    const $map = $('#map');
    const center = {lat: 54.72831, lng: 55.95533};

    const contactMap = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 12,
      disableDefaultUI: false,
      styles : styleMap
    });

    const markerIcon = {
      url: 'http://www.pictanovo.com/wp-content/themes/pictanovo/build/img/marker.svg',
      anchor: new google.maps.Point(30,77),
      scaledSize: new google.maps.Size(60,77)
    };

    const contactMarker = new google.maps.Marker({
      position: center,
      map: contactMap,
      icon:markerIcon
    });

    google.maps.event.addDomListener(window, 'resize', function() {
      contactMap.setCenter(center);
    });

    TweenMax.from($map, 1.6, {opacity:0, ease:Power3.easeOut});
  }
  initMap(e) {

  }

  destroy() {

  }

}

