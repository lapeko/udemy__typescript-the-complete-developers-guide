export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  labelContent(): string;
  color: string;
}

export class CustomMap {
  private map: google.maps.Map;

  constructor(divId: string) {
    const div = document.getElementById(divId) as HTMLDivElement;
    this.map = new google.maps.Map(div, {
      zoom: 0,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker = function (withLocation: Mappable) {
    const marker = new google.maps.Marker({
      map: this.map,
      position: withLocation.location,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: withLocation.labelContent(),
    });

    marker.addListener("click", () => {
      infoWindow.open({ anchor: marker, map: this.map });
    });
  };
}
