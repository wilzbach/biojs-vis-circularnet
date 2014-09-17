# biojs-vis-circularnet

[![Build Status](https://secure.travis-ci.org/greenify/biojs-vis-circularnet.png?branch=master)](http://travis-ci.org/greenify/biojs-vis-circularnet)
[![NPM version](https://badge-me.herokuapp.com/api/npm/biojs-vis-circularnet.png)](http://badges.enytc.com/for/npm/biojs-vis-circularnet) 

> A circular network component

Taking from the [Hierarchical Edge Bundling](http://bl.ocks.org/mbostock/7607999) by Mike Bostock.

## Getting Started
Install the module with:

```
npm install biojs-vis-circularnet
```

```javascript
var circularnet = require('biojs-vis-circularnet');
var data = [{name: "A", size: 4, imports: ["B"]},
{name: "B", imports: ["D"]},
{name: "C", imports: ["A","D", "E"]}, 
{name: "D", imports: []},
{name: "E", imports: []}]
var config = {diameter:460, diffInnerRadius: 20,tension: 0.85, data: data};
var obj = new circularnet(config);
```


## Contributing

Please submit all issues and pull requests to the [greenify/biojs-vis-circularnet](http://github.com/greenify/biojs-vis-circularnet) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/greenify/biojs-vis-circularnet/issues).

## License 


This software is licensed under the Apache 2 license, quoted below.

Copyright (c) 2014, greenify

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
