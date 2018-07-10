# Hakta Assistant (v0.5) 
## This is pre realise version.  
Lightweight Javascript plugin for create easy assistant for your site. He can make navigation more easy.


## What you need
* Jquery 3+
* Your website

## Example
You can see example [here](https://emilsabitov.github.io/HaktaAssistant/)
## How to use
You need to copy files from 'dist' folder with keeping paths. Then you can use code bellow:
```javascript
    let assistant = new HKAssistant;
    assistant.init();
    assistant.activate();
    //OR assistant.activate("Your hello message");	
```

If you want add hint to some block on your site, you can add "hk_assistant_help" class to block, and add data attribute with hint. Like this:
```html
    <div class="hk_assistant_help" data-hk-help="Here is my help for assistant">
    
    <p>My interesting block</p>
    
    </div>
``` 



## TODOs
* rewrite css (use flex and normal layout)
* improve javascript (because know it's terrible)

