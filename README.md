# Expand
Force an element to expand in order to fill the page.

## Options

No options are required.

| Option  |   Type   | Default | Description |
|---------|----------|---------|-------------|
|   end   |  String  |    ''   | Set an end point, in order to ignore elements that are placed at the end of the dom, such scripts and Absolutely placed elements. |
|  after  | Function |  false  | Declare a function to run after the height resizes. |

## Examples:

### Basic usage

HTML / Javascript

    <script type="text/javascript" src="path/to/expand.js"></script>
  
    <script type="text/javascript">
    $(document).ready(function(){
      $('.yourDiv').expand();
    });
    </script>
    
### Using options

    $('.yourDiv').parallax({
      end: '.last',
      after: function() {
        // Code to fire.
      }
    });

## Other information

Requires jQuery to be included.

Tested in IE 8+, the latest version of Firefox and the latest version of Google Chrome.
