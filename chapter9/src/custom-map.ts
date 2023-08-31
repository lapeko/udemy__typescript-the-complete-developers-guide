export class CustomMap {
  private map: google.maps.Map;

  constructor(divId: string) {
    const div = document.getElementById(divId) as HTMLDivElement;
    this.map = new google.maps.Map(div, {
      zoom: 0,
      center: { lat: 0, lng: 0 },
    });
  }
}
