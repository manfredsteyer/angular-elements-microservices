import { UrlHandlingStrategy } from "@angular/router";

export class CustomHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url) {
      return url.toString().startsWith("/client-a/");
    }
    extract(url) { return url; }
    merge(url, whole) { return url; }
  }