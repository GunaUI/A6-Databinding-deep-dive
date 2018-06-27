import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'testing server', content: 'content testing'}];

  onServerAdded(serverData : {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueData : {blueName: string, blueContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueData.blueName,
      content: blueData.blueContent
    });
  }
}
