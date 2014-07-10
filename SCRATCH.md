
## Reading The Fine Manual

- https://developer.chrome.com/apps/declare_permissions
 - Links to the API are broken. Exeample [chrome.adview](https://developer.chrome.com/apps/adview)
 

## manifest.json

Removing those permissions from the manifest.json file

```json
  "permissions": [
      "<all_urls>",
      "storage", 
      "alarms", 
      "syncFileSystem" ,
      { "fileSystem": ["write"]}
      ]
````

## Bower

bower.json

```js
{
  "name": "look-at-my-chrome-apps",
  "version": "0.1",
  "dependencies": {
  ...
    "angular": "~1.2.16",
    "react": "~0.10.0"
  }
}
```
 
    
## Using Angular (or not)


```html
    <!-- Try out later Angular
    <script src="js/app.js"></script>
    <script src="js/services.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/filters.js"></script>
    <script src="js/directives.js"></script>
    <script src="bower_components/angular/angular.min.js"></script>
    -->
```


## Built with

form from the popup: bootstrap + http://bootsnipp.com/forms

## Navigation bar

```html
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
```

