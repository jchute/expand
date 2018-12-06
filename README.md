# Expand
Force an element to expand in order to fill the page.

## Options

No options are required.

|  Option  |   Type   | Default | Description |
|----------|----------|---------|-------------|
|   last   |  Element |    ''   | Set an end point, in order to ignore elements that are placed at the end of the dom, such as scripts and Absolutely placed elements. |
|   after  | Function |  false  | Declare a function to run after the height resizes. |
|  wrapper |  String  |  'body' | Set which tag to treat as the main wrapping element. |
| sections |  String  |    ''   | Sets which tags to remove from the main body. The tag being checked is ignored. Empty string checks all. |

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
      wrapper: 'body',
      last: $('.last'),
      sections: '.page-section',
      after: function() {
        // Code to fire.
      }
    });

## Other information

Requires jQuery to be included.

Tested in IE 8+, the latest version of Firefox and the latest version of Google Chrome.
