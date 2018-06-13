import BarbaPageBase from '../barba/BarbaPageBase';
//import StoreMap from '../partial/StoreMap';
export default class Stores extends BarbaPageBase {
  constructor() {
    super('stores');
    //console.log('Start Stores page');
    this.API_KEY = 'AIzaSyC30nnqC_nxh8v5p4jQpZEE2KyZUhl2NLU';

    //this.mapStyle = [{'featureType':'administrative','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#fcfcfc'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#fcfcfc'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#eeeeee'}]},{'featureType':'water','elementType':'geometry','stylers':[{'visibility':'simplified'},{'color':'#dddddd'}]}];
    //this.mapStyle = [{'featureType':'all','elementType':'labels.text.fill','stylers':[{'saturation':36},{'color':'#120d19'}]},{'featureType':'all','elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#ffffff'},{'lightness':16}]},{'featureType':'all','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#fefefe'},{'lightness':20}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#fefefe'},{'lightness':17},{'weight':1.2}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#efefef'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':21}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#dedede'},{'lightness':21}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#7a7a7a'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#ffffff'},{'lightness':29},{'weight':0.2}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#7a7a7a'},{'lightness':25}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#7a7a7a'},{'lightness':70}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#f2f2f2'},{'lightness':19}]},{'featureType':'water','elementType':'geometry','stylers':[{'color':'#353535'}]}];
    //this.mapStyle = [{'featureType':'all','elementType':'geometry','stylers':[{'color':'#ffffff'}]},{'featureType':'all','elementType':'labels.text.fill','stylers':[{'gamma':0.01},{'lightness':20}]},{'featureType':'all','elementType':'labels.text.stroke','stylers':[{'saturation':-31},{'lightness':-33},{'weight':2},{'gamma':0.8}]},{'featureType':'all','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'administrative.locality','elementType':'labels.text.fill','stylers':[{'color':'#050505'}]},{'featureType':'administrative.locality','elementType':'labels.text.stroke','stylers':[{'color':'#fef3f3'},{'weight':'3.01'}]},{'featureType':'administrative.neighborhood','elementType':'labels.text.fill','stylers':[{'color':'#0a0a0a'},{'visibility':'off'}]},{'featureType':'administrative.neighborhood','elementType':'labels.text.stroke','stylers':[{'color':'#fffbfb'},{'weight':'3.01'},{'visibility':'off'}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'lightness':30},{'saturation':30}]},{'featureType':'poi','elementType':'geometry','stylers':[{'saturation':20}]},{'featureType':'poi.attraction','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'lightness':20},{'saturation':-20}]},{'featureType':'road','elementType':'geometry','stylers':[{'lightness':10},{'saturation':-30}]},{'featureType':'road','elementType':'geometry.stroke','stylers':[{'saturation':25},{'lightness':25}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#a1a1a1'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#292929'}]},{'featureType':'road.highway','elementType':'labels.text.fill','stylers':[{'visibility':'on'},{'color':'#202020'}]},{'featureType':'road.highway','elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#ffffff'}]},{'featureType':'road.highway','elementType':'labels.icon','stylers':[{'visibility':'simplified'},{'hue':'#0006ff'},{'saturation':'-100'},{'lightness':'13'},{'gamma':'0.00'}]},{'featureType':'road.arterial','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#686868'}]},{'featureType':'road.arterial','elementType':'geometry.stroke','stylers':[{'visibility':'off'},{'color':'#8d8d8d'}]},{'featureType':'road.arterial','elementType':'labels.text.fill','stylers':[{'visibility':'on'},{'color':'#353535'},{'lightness':'6'}]},{'featureType':'road.arterial','elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#ffffff'},{'weight':'3.45'}]},{'featureType':'road.local','elementType':'geometry.fill','stylers':[{'color':'#d0d0d0'}]},{'featureType':'road.local','elementType':'geometry.stroke','stylers':[{'lightness':'2'},{'visibility':'on'},{'color':'#999898'}]},{'featureType':'road.local','elementType':'labels.text.fill','stylers':[{'color':'#383838'}]},{'featureType':'road.local','elementType':'labels.text.stroke','stylers':[{'color':'#faf8f8'}]},{'featureType':'water','elementType':'all','stylers':[{'lightness':-20}]}];
    //this.mapStyle = [{'featureType':'water','elementType':'geometry','stylers':[{'color':'#e9e9e9'},{'lightness':17}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':20}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#ffffff'},{'lightness':17}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#ffffff'},{'lightness':29},{'weight':0.2}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#ffffff'},{'lightness':18}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#ffffff'},{'lightness':16}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':21}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#dedede'},{'lightness':21}]},{'elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#ffffff'},{'lightness':16}]},{'elementType':'labels.text.fill','stylers':[{'saturation':36},{'color':'#333333'},{'lightness':40}]},{'elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#f2f2f2'},{'lightness':19}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#fefefe'},{'lightness':20}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#fefefe'},{'lightness':17},{'weight':1.2}]}];

    //silver
    this.mapStyle=[{elementType:'geometry',stylers:[{color:'#f5f5f5'}]},{elementType:'labels.icon',stylers:[{visibility:'off'}]},{elementType:'labels.text.fill',stylers:[{color:'#616161'}]},{elementType:'labels.text.stroke',stylers:[{color:'#f5f5f5'}]},{featureType:'administrative.land_parcel',elementType:'labels.text.fill',stylers:[{color:'#bdbdbd'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'poi',elementType:'labels.text.fill',stylers:[{color:'#757575'}]},{featureType:'poi.park',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'poi.park',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'road',elementType:'geometry',stylers:[{color:'#ffffff'}]},{featureType:'road.arterial',elementType:'labels.text.fill',stylers:[{color:'#757575'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#dadada'}]},{featureType:'road.highway',elementType:'labels.text.fill',stylers:[{color:'#616161'}]},{featureType:'road.local',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'transit.line',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'transit.station',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'water',elementType:'geometry',stylers:[{color:'#c9c9c9'}]},{featureType:'water',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]}];


  }
  display(container, promise, context) {
    super.display(container, promise, context);
  }
  onEnterCompleted() {
    super.onEnterCompleted();
    this.locations = document.querySelectorAll('.store-city__item');
    // To fix : loop for each address
    let arr = [];
    // [...document.querySelectorAll('.store-city__item')].forEach((el, pos) => {
    //   console.log(el.dataset.fulladdress)
    //     arr.push(el.dataset.fulladdress)
    // });

    if ( this.locations.length > 0 ) {
      this.centerMap = this.locations[0].getAttribute('data-latlng').split(',').map(Number);
      // Fns
      this.loadGmaps();
    }
    this.listStores();
  }
  listStores() {
    const ps = new PerfectScrollbar('.b-stores');
  }
  loadGmaps() {
    if ( !window.googleMapsLoaded ) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.google.com/maps/api/js?key='+this.API_KEY;
      document.body.appendChild(script);
      script.onload = () => {
        window.googleMapsLoaded = true;
        this.initializeMap();
      };
    } else {
      this.initializeMap();
    }
  }
  initializeMap() {
    let zoom = 2;
    if ( window.innerWidth <= 1199 ) {
      zoom = 6;
    }
    let bounds = [];
    this.map = new GMaps({
      el: document.getElementById('gmap'),
      center: { lat: this.centerMap[0], lng: this.centerMap[1] },
      zoom: zoom,
      // scrollwheel: false,
      // scrollwheel: false,
      streetViewControl: false,
      // zoomControl: false,
      mapTypeControl: false,
      // scaleControl: false,
      rotateControl: false,
      // fullscreenControl: false,
      // scrollwheel: false,
      draggable: true,
      styles: this.mapStyle,
      markerClusterer: function(map) {
        let options = {
          gridSize: 40,
          maxZoom: 14,
          styles: [{
            url: 'https://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png',
            height: 56,
            width: 56,
            anchor: [0, 0],
            //textColor: '#ffffff',
            //textSize: 10,
            iconAnchor: [15, 48]
          }]
        };
        return new MarkerClusterer(map, [], options);
      }
    });

    let elems = document.querySelectorAll('.store-city__item');
    let mmarkers = [];
    for ( let i = 0; i < elems.length; i++ ) {

      let mm = {
        'name': elems[i].querySelector('.store-city__name').textContent,
        //'address': elems[i].getAttribute('data-addr'),
        'address': elems[i].querySelector('.store-city__addr').innerHTML,
        'lat': elems[i].getAttribute('data-latlng').split(',').map(Number)[0],
        'lng': elems[i].getAttribute('data-latlng').split(',').map(Number)[1]
      };
      if (elems[i].getAttribute('data-latlng')) {
        mmarkers.push(mm);
      };
    };
    console.log(mmarkers);


    for ( let i = 0; i < this.locations.length; i++ ) {
      let latlng = this.locations[i].getAttribute('data-latlng').split(',').map(Number);
      let ll = new google.maps.LatLng(latlng[0], latlng[1]);
      let addr = this.locations[i].getAttribute('data-fulladdress');
      let selfMap = this.map;
      var test = [];
      // GMaps.geocode({
      //   address: addr,
      //   callback: function(results, status) {
      //     // if (status === google.maps.GeocoderStatus.OK) {
      //     //   var r=[];
      //     //   r.push(result[0].geometry.location.lat());
      //     //   r.push(result[0].geometry.location.lng());
      //     //   test.push(r);
      //     // }
      //     if (status === google.maps.GeocoderStatus.OK) {
      //       for (var i = 0; i < results.length; i++) {
      //         console.log(results[i]);
      //       }
      //     } else {
      //       alert('Geocode was not successful for the following reason: ' + status);
      //     }
      //     }
      //   });
      // GMaps.geocode({
      //   address: addr,
      //   callback: function(results, status) {
      //     if (status === google.maps.GeocoderStatus.OK) {
      //       var latlng = results[0].geometry.location;
      //       //selfMap.setCenter(latlng.lat(), latlng.lng());
      //       selfMap.addMarker({
      //         lat: latlng.lat(),
      //         lng: latlng.lng(),
      //         icon: {
      //           url: '/img/logo_bf_pin2.png', // url
      //           scaledSize: new google.maps.Size(50, 50), // scaled size
      //           //origin: new google.maps.Point(0,0), // origin
      //           //anchor: new google.maps.Point(0, 0) // anchor
      //         },
      //         click: function(e) {
      //           window.open('https://www.google.com/maps/place/'+latlng.lat()+','+latlng.lng()+'', '_blank');
      //         }
      //       });
      //     }
      //   }
      // });
      bounds.push(ll);
      this.map.fitLatLngBounds(bounds);

      this.map.addMarker({
        lat: latlng[0],
        lng: latlng[1],
        icon: {
          url: 'https://mfd.github.io/mdrt/img/marker-svg.png', // url
          scaledSize: new google.maps.Size(50, 50), // scaled size
          //origin: new google.maps.Point(0,0), // origin
          //anchor: new google.maps.Point(0, 0) // anchor
        },
        infoWindow: {
          content: `Координаты: ${latlng[0]} / ${latlng[1]}`
        },
        mouseover: function() {
          this.infoWindow.open(this.map, this);
        },
        mouseout: function() {
          this.infoWindow.close();
        },
        click: function(e) {
          window.open('https://www.google.com/maps/place/'+latlng[0]+','+latlng[1]+'', '_blank');
        }
      });
    }



    setTimeout(function() {
      document.getElementById('gmap').style.opacity = '1';
    }, 650);
  }
  hide(container, promise) {
    super.hide(container,promise);
    // this.listEpisode.kill();
    // this.listEpisode = null;
  }
}
