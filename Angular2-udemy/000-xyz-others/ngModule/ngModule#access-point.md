# ngModule access point  


Q: what's this mean ?

```reference
#title="ngModule"
https://www.youtube.com/watch?v=KGfZPP36QUI (7:01 / 27:28) 

https://angular.io/docs/ts/latest/guide/cheatsheet.html  
<video #movieplayer ...>
  <button (click)="movieplayer.play()">
</video> 
``` 
A: Creates a local variable `movieplayer` that provides access to the video element instance in data-binding and event-binding expressions in the current template.﻿