## Adding a language:
first value in json object is "language".  value must match file name.  For example, en.json, "language": "en", spanish.json, "language": "spanish"

add option to select in language_toggle component.  Option value = language.  example:

``` html
<option value='en'>ENGLISH</option>
```

import flag into language_toggle component, and add it to the switch statement in the get_flag function.


``` javascript
import english_flag from '../img/flags/en.png';

...

const get_flag = () => {
	let flag;
	switch(this.props.site_content.language){
		case 'en':
			flag = english_flag;
			break;
			...
```

I think that's it.

## Adding a partner

If it's a short, wide logo, resize image to 250px wide.  If it's pretty tall, you want it to be smaller.  150px tall seems to work most of the time.

Import image into front_page.js component, add image, url, and name to partnersArr array.  The name will be used as the alt attribute in the image.  If there is no image, it will display the name as a link.  If there is no url, it will display just the image or text.  There must be a name, or there will be an error.


## Building

Commands are same as create-react-app, build with:

```
npm run build
```

Then just copy the build folder to the website.