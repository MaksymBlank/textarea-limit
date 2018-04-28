# tx-bind
## Installation
- include limit.js
- include limit.css
- call <code>txBinding(className: string)</code>
> className - class name of the textarea

```html
<head>
<link rel="stylesheet" href="./../tx-limit.css">
<script src="./../tx-limit.js"></script>

...

</head>
<body>
    <div class="tx-limit-main">
        <textarea class="tx-limit-area"></textarea>
    </div>
    <div class="tx-limit-bottom">
        <span tx-bind="error"></span>
        <span tx-bind="current">0</span>/<span tx-bind="limit">300</span>
    </div>

    <script>
    txBinding('tx-limit-area', 300);
    </script>
```

## Arguments
- className: string - name of the class
- limit:number - limit of characters for the textarea

## Using
- Attr <code>tx-bind="error"</code> will be binded with $scope.error and will be showing errors
- Attr <code>tx-bind="limit"</code> will be binded with $scope.limit and will be showing your textarea limit (default: 500)
- Attr <code>tx-bind="current"</code> will be binded with $scope.current and will be showing current length